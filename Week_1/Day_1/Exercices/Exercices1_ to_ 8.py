
#Exercice 1
print("Hello world\n" *4)


#Exercice 2
print ((99**3)*8)


#Exercice 3
name= input("What is your name?")
if(name == "Salmane"):
    print("Wow, we have the same name")
else:    
    print("My name is better than yours")
    
    

#Exercice 4
height =int(input("What is your height in cm?"))
if (height > 145):
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride!")

    
#Exercice 5

my_fav_numbers={16,15,18}
my_fav_numbers.add(20)
my_fav_numbers.add(25)

my_fav_numbers.remove(25)

friend_fav_numbers={30,40,50}

our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


#Exercice 6

#Tuples are immutable, but we can add more integers to a tuple by creating a new tuple that includes the existing values along with the new ones.

#Exercice 7

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


# Exercice 8

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
     sandwich_orders.remove("Pastrami sandwich") 
     
finished_sandwiches=[]
for order in sandwich_orders:
    finished_sandwiches.append(order)

for order in finished_sandwiches:
    print("I made  your " + order)


