import random

def check_numbers(user_number):
    number_1= random.randint(1,100)
    
    
    if user_number == number_1:
        print("Sucess, the 2 numbers are identical")
    else :
        print("Fail, numbers "+ str(user_number) + " & " + str(number_1) + " are not identical")
    
check_numbers(20)