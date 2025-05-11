class TheIncredibles(Family):
    def use_power(self, name):
        for m in self.members:
            if m['name'] == name:
                if m['age'] >= 18:
                    print(m['power'])
                else:
                    raise Exception("They are not over 18 years old")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


my_family = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])

my_family.incredible_presentation()
my_family.born(name="Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")
my_family.incredible_presentation()
