class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations on the new child!")

    def is_18(self, name):
        for m in self.members:
            if m['name'] == name:
                return m['age'] >= 18
        return False

    def family_presentation(self):
        print(self.last_name)
        for m in self.members:
            print(m)


my_family = Family("Smith", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
])

my_family.born(name="Tom", age=0, gender="Male", is_child=True)
print(my_family.is_18("Michael"))
my_family.family_presentation()
