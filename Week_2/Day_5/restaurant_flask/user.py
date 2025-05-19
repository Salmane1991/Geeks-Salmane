import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '0000'
DATABASE = 'Restaurant'
PORT = '5432'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)


class UserLogin:

    def __init__(self, email, password):
        self.email = email
        self.password = password

    def check(self):
        cursor = connection.cursor()
        query = "SELECT * FROM Users WHERE email = %s AND password=%s"
        cursor.execute(query, (self.email, self.password))
        result = cursor.fetchone()
        cursor.close()
        print(result)
        return result


if __name__ == "__main__":
    user_login = UserLogin('salmane@gmail.com', '12345')
    user_login.check()
