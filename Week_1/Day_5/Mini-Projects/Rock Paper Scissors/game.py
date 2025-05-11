import random

class Game:
    
    
    def __init__(self):
        self.choices_list = ["rock", "paper", "scissors"]


    def get_user_item(self):

        
        user_choice=input("Let's play! Please choose one from (Rock, Paper, or Scissors): ").lower()


        if user_choice in self.choices_list:
            return user_choice
        else:
            print ("Invalid choice! Please try again!")
            return self.get_user_item()
        
    def  get_computer_item(self):
        computer_choice=random.choice(self.choices_list)
        return computer_choice
    
    
    def get_game_result(self, user_item, computer_item):
      
      if user_item == computer_item:
        return "draw"
      elif (user_item == "rock" and computer_item == "scissors") or \
         (user_item == "paper" and computer_item == "rock") or \
         (user_item == "scissors" and computer_item == "paper"):
       return "win"
      else:
        return "loss"
    
    def play(self):
        
        user_item=self.get_user_item()
        computer_item=self.get_computer_item()
        game_result=self.get_game_result(user_item, computer_item)
        
        print (f"You selected {user_item}. The computer selected {computer_item}. you {game_result}")
        if game_result == "win":
          print("You win!")
        elif game_result == "draw":
         print("It's a draw!")
        else:
         print("You lose!")
        return game_result
        
        

        

    
