family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
cost=0
for age in family.values():
    if age < 3 :
        cost = cost+0
    if  3 <age< 12 :
        cost=cost+10
    if age> 12:
        cost=cost+15
    
print("The cost for the full family is ", cost) 

family_dictionary={}
while True:
    name=input("Your name please?")
    if name == "quit": 
        break
    
    age=int(input("Your age please?"))    
    
    family_dictionary[name]=age