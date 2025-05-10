class Dog:
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
    
    def bark(self):
        return  f'{self.name} is barking'
    
    def run_speed(self):
        return  f'{self.weight/ self.age * 10}'
    
    def fight(self,another_dog):
        if (self.run_speed() * self.weight) > another_dog.run_speed() * another_dog.weight:
            return f"The {self.name} dog won the game"
        else:
            return f"The {another_dog.name} dog won the game"
       
Dog1= Dog("Bob",12,40)
Dog2= Dog("Rex",13,50)
Dog3= Dog("Fox",10,30)

fight1=Dog1.fight(Dog2)
fight2=Dog1.fight(Dog3)
fight3=Dog2.fight(Dog3)

print(fight1)
print(fight2)
print(fight3)