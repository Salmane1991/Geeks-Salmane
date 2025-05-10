import math

class pagination:
  def __init__(self,items=None,page_size=10):
       if items is None:
        self.list_items=[]
       else: 
           self.list_items=items
        
       self.page_size=page_size  
       self.current_idx = 0
       self.total_pages = math.ceil(len(self.list_items) / self.page_size)
       
  def get_visible_items(self):
    start= self.current_idx*self.page_size
    end=start+self.page_size
    return self.list_items[start:end]
      
  def go_to_page(self, page_num):
    if page_num < 1 or page_num > self.total_pages:
        raise ValueError("Page is out of range")    
    self.current_idx = page_num - 1
  
  def first_page(self):
    self.go_to_page(1)
    return self
  
  def last_page(self):
    self.go_to_page(self.total_pages)
    return self
  
  def next_page(self):
    if self.current_idx < self.total_pages-1:
      self.go_to_page(self.current_idx+1)
      return self
    
  def previous_page(self):
    if self.current_idx> 0:
      self.go_to_page(self.current_idx-1)
      return self
    
  def __str__(self):
    visible_items = self.get_visible_items()
    return "\n".join(visible_items)
                       
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError

      
     
          
          

    