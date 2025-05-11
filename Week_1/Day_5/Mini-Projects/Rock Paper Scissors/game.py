import random

class Game:


    def get_user_item(self):

        choices_list=["Rock","Paper","Scissors"]

        user_choice=input("Let's play! Please choose one from (Rock, Paper, or Scissors): ")


        if user_choice in choices_list:
            return user_choice
        else:
            print ("Invalid choice! Please try again!")
            return self.get_user_item()
        
