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
      
      
      
   
      
     
          
          

    