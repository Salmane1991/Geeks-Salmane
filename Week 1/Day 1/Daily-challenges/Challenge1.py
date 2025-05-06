number=int(input("Give me a number?"))
length=int(input("How long is the length?"))

multiples_list=[]
multiplier=1

if (length>=1):
 while (len(multiples_list)<length):
    multiples_list.append(number*multiplier)
    multiplier=multiplier+1
   
  
  
  
print(multiples_list)
