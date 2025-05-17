import requests
import random
import psycopg2

DB_NAME = "Countries"
USER = "postgres"
PASSWORD = "0000"
HOST = "localhost"
PORT = "5432"

url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
data = response.json()

random_countries = random.sample(data, 10)

conn = psycopg2.connect(
    dbname=DB_NAME,
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT
)
cur = conn.cursor()

for country in random_countries:
    name = country['name']['common']
    capital = country.get('capital', ['Unknown'])[0]
    flag = country['flags']['png']
    subregion = country.get('subregion', 'Unknown')
    population = country.get('population', 0)

    print("Trying to insert:", name, capital)
    cur.execute("""
    INSERT INTO countries_data (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s)
""", (name, capital, flag, subregion, population))

conn.commit()
cur.close()
conn.close()
