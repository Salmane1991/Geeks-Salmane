class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"Dog's name: {davids_dog.name}, Height: {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Dog's name: {sarahs_dog.name}, Height: {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}")
else:
    print(f"The bigger dog is {sarahs_dog.name}")
