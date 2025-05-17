import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '0000'
DATABASE = 'Restaurant'
PORT = '5432'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)


class MenuManager:

    def get_by_name(self, name):
        cursor = connection.cursor()
        query = f"SELECT item_name FROM Menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        result = cursor.fetchone()
        if result:
            return result
        else:
            return None

    def all_items(self):
        cursor = connection.cursor()
        query = f"SELECT * FROM Menu_items"
        cursor.execute(query)
        result = cursor.fetchall()
        return (result)
