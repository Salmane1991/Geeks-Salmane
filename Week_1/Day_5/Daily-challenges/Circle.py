import math

class Circle:
    def __init__(self, radius=0, diameter=None):
        if diameter is not None:
            self.radius = diameter / 2
        else:
            self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius
