from flask import Flask, redirect, render_template, request, url_for, session
from menu_manager import MenuManager
from menu_item import MenuItem
from user import UserLogin

app = Flask(__name__)
app.secret_key = "your_secret_key_here"

manager = MenuManager()


def is_logged_in():
    return "user" in session


def is_admin():
    return session.get("role") == "admin"


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        credentials = UserLogin(email, password)
        user_row = credentials.check()

        if not user_row:
            return "Error, Try again!"

        session["user"] = email
        session["role"] = user_row[3]

        return redirect(url_for("home"))

    return render_template("login.html")


@app.route("/logout")
def logout():
    session.pop("user", None)
    session.pop("role", None)
    return redirect(url_for("login"))


@app.route("/menu")
def menu():
    items = manager.all_items()
    return render_template("menu.html", items=items)


@app.route("/add", methods=["GET", "POST"])
def add():
    if not is_logged_in() or not is_admin():
        return redirect(url_for("login"))

    if request.method == "POST":
        item_name = request.form.get("item_name")
        item_price = request.form.get("item_price")

        new_item = MenuItem(item_name, int(item_price))
        new_item.save()
        return redirect(url_for("menu"))

    return render_template("add_item.html")


@app.route("/update", methods=["GET", "POST"])
def update():
    if not is_logged_in() or not is_admin():
        return redirect(url_for("login"))

    if request.method == "POST":
        old_name = request.form.get("old_name")
        old_price = request.form.get("old_price")
        new_name = request.form.get("new_name")
        new_price = request.form.get("new_price")

        item = MenuItem(old_name, int(old_price))
        item.update(new_name, int(new_price))

        return redirect(url_for("menu"))

    return render_template("update_item.html")


@app.route("/delete", methods=["GET", "POST"])
def delete():
    if not is_logged_in() or not is_admin():
        return redirect(url_for("login"))

    if request.method == "POST":
        item_name = request.form.get("item_name")

        item = MenuItem(item_name, 0)
        try:
            item.delete()
            return redirect(url_for("menu"))
        except Exception as e:
            return f"Error deleting item: {e}"

    return render_template("delete_item.html")


if __name__ == "__main__":
    app.run(debug=True)
