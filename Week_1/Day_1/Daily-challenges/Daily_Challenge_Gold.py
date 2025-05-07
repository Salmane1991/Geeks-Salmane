import datetime

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def get_age(birthdate):
    today = datetime.date.today()
    d, m, y = map(int, birthdate.split("/"))
    birthday_this_year = datetime.date(today.year, m, d)
    age = today.year - y
    if today < birthday_this_year:
        age -= 1
    return age

def print_cake(candles):
    print("       " + "_" + "i" * candles + "_")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

bday = input("Enter your birthdate (DD/MM/YYYY): ")
age = get_age(bday)
candles = age % 10
year = int(bday.split("/")[-1])

if is_leap_year(year):
    print("\nYou were born in a leap year! Here are two cakes:\n")
    print_cake(candles)
    print()
    print_cake(candles)
else:
    print()
    print_cake(candles)
