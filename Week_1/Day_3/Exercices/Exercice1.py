class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
first_cat=Cat("Tom",12)
second_cat=Cat("Rex",7)
third_cat=Cat("Sam",3)

def old_cat():
    
  if  first_cat.age> second_cat.age and first_cat.age>third_cat.age:
      return first_cat
  elif second_cat.age >first_cat.age and second_cat.age>third_cat.age:
      return second_cat
  else:
      return third_cat
oldest=old_cat()

print(f"The oldest cat is {oldest.name}, and it is {oldest.age} years old!")
