class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)















"""


class Door:
    def __init__(self,is_opened):
        self.is_opened=is_opened
    
    def open_door(self):
        is_opened=True;
    def close_door(self):
        is_opened=False;


class BlockedDoor(Door):
    def open_door(self):
        raise Exception("A blocked door cannot be opened")

    def close_door(self):
        raise Exception("A blocked door cannot be closed")

        
    """