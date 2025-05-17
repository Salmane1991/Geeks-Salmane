import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '0000'
DATABASE = 'Restaurant'
PORT = '5432'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)


class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        cursor = connection.cursor()
        query = "INSERT INTO Menu_items (item_name, item_price) VALUES (%s, %s)"
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        cursor.close()

    def delete(self):
        cursor = connection.cursor()
        query = "DELETE FROM Menu_items WHERE item_name = %s"
        cursor.execute(query, (self.name,))
        connection.commit()
        cursor.close()

    def update(self, new_item, new_price):
        cursor = connection.cursor()
        query = '''
            UPDATE Menu_items
            SET item_name = %s, item_price = %s
            WHERE item_name = %s AND item_price = %s
        '''
        cursor.execute(query, (new_item, new_price, self.name, self.price))
        connection.commit()
        cursor.close()
