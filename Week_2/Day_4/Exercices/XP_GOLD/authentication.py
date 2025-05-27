import psycopg2
import hashlib

connection = psycopg2.connect(
    host='localhost',
    user='postgres',
    password='0000',
    dbname='auth_db'
)
cursor = connection.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        username TEXT PRIMARY KEY,
        password TEXT
    )
''')
connection.commit()


def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


def get_user(username):
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    return cursor.fetchone()


logged_in = None

while True:
    action = input("Type 'login', 'signup' or 'exit': ").lower()

    if action == "exit":
        print("Goodbye!")
        break

    elif action == "login":
        username = input("Enter username: ")
        password = input("Enter password: ")
        user = get_user(username)
        if user and user[1] == hash_password(password):
            print("You are now logged in.")
            logged_in = username
        else:
            print("Invalid login.")

    elif action == "signup":
        while True:
            new_username = input("Choose a username: ")
            if get_user(new_username):
                print("Username already exists. Try another.")
            else:
                break
        new_password = hash_password(input("Choose a password: "))
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s)", (new_username, new_password))
        connection.commit()
        print("Signup successful. You can now login.")
