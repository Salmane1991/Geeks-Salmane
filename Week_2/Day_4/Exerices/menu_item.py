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
        query = f'''
            insert into Menu_items (item_name,item_price)
             values
            ('{self.name}',{self.price})
        
        '''
        print("Running query:")
        print(query)
        cursor.execute(query)
        connection.commit()

    def delete(self):
        cursor = connection.cursor()
        query = f'''DELETE FROM Menu_items WHERE item_name='{self.name}' '''

        cursor.execute(query)
        connection.commit()

    def update(self, new_item, new_price):
        cursor = connection.cursor()
        query = f'''UPDATE Menu_items SET item_name='{new_item}' , item_price={new_price} 
        WHERE item_name='{self.name}' AND item_price={self.price}
        '''
        cursor.execute(query)
        connection.commit()


item1 = MenuItem('Pizza', 45)
item1.update('NoGluten-Pizza', 60)


# item1 = MenuItem('Pizza', 45)
# item2 = MenuItem('Sushi', 60)
# item3 = MenuItem('Tacos', 30)

# item1.save()
# item2.save()
# item3.save()
