import psycopg2

# 1. Connect to the database

DB_NAME = "Hollywood"
USER = "postgres"
PASSWORD = "0000"
HOST = "localhost"
PORT = "5432"  # or 5433

connection = psycopg2.connect(
    host=HOST, user=USER, password=PASSWORD, dbname=DB_NAME)


def create_table(table_name):
    """create new table with id, num"""
    cursor = connection.cursor()
    query = f'''
    create table {table_name}(
        id serial primary key,
        num integer not null
    );
     '''
    cursor.execute(query)  # execute the query
    connection.commit()  # make changes in the database


def insert_into_table(table_name: str, num_value: int):
    cursor = connection.cursor()

    query = f'''
    insert into {table_name}(num)
    values
    ({num_value})
    '''
    cursor.execute(query)  # execute the query
    connection.commit()  # make changes in the database


# insert_into_table('animals', 300)

def select_all(table_name: str):
    cursor = connection.cursor()

    query = f'''
    select * from {table_name};
    '''

    cursor.execute(query)
    output = cursor.fetchall()
    return output


select_all('animals')
print(select_all('animals'))
connection.close()