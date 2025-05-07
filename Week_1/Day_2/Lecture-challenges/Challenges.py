""""
# Challenge 1
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
# Accessing the value of key history:

print(sample_dict["class"]["student"]["marks"]["history"])

#Challenge 2:

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
   del sample_dict[key]


print(sample_dict.items())
 

"""
#Challenge 3

my_dictionary={}
while True:
 entry_key=input("Type your key!") 
 entry_value=input("Type your value!")

  
 if entry_key== "quit" or entry_value == "quit":
    break
    
 my_dictionary[entry_key]=entry_value 

print(my_dictionary)




