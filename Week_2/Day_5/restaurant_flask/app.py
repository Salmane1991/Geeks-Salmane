from flask import Flask, redirect, render_template, request, url_for
from menu_manager import MenuManager
from menu_item import MenuItem

app = Flask(__name__)
manager = MenuManager()


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/menu")
def menu():
    items = manager.all_items()
    return render_template("menu.html", items=items)


@app.route("/add", methods=["GET", "POST"])
def add():
    if request.method == "POST":
        item_name = request.form.get("item_name")
        item_price = request.form.get("item_price")

        new_item = MenuItem(item_name, int(item_price))
        new_item.save()
        return redirect(url_for("menu"))
    return render_template("add_item.html")


@app.route("/update", methods=["GET", "POST"])
def update():
    if request.method == "POST":
        old_name = request.form.get("old_name")
        old_price = request.form.get("old_price")
        new_name = request.form.get("new_name")
        new_price = request.form.get("new_price")

        # Create MenuItem with old name and price
        item = MenuItem(old_name, int(old_price))
        item.update(new_name, int(new_price))

        return redirect(url_for("menu"))

    return render_template("update_item.html")


@app.route("/delete", methods=["GET", "POST"])
def delete():
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
