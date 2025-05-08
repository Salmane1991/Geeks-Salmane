import random

def get_random_temp(season):
    if(season=="winter"):
     number=round(random.uniform(-10.0,0),2)
    elif (season=="autumn"):
     number=round(random.uniform(0,16.0),2)
    elif (season=="spring"):
     number=round(random.uniform(16.0,30.0),2)
    elif (season=="summer"):
     number=round(random.uniform(30.0,40.0),2)
    return number


def main():
    
    month_number=int(input("What's the number of the month?"))
    
    winter = [12, 1, 2]
    spring = [3, 4, 5]
    summer = [6, 7, 8]
    autumn = [9, 10, 11]
    
    if month_number in winter:
        which_season="winter" 
    elif month_number in spring:
        which_season="spring"
    elif month_number in summer:
        which_season="summer"
    else:
        which_season="autumn"
        
    
    temp=(get_random_temp(which_season))
    if temp < 0 :
      print( temp,"C, Brrr, that’s freezing! Wear some extra layers today")
    elif 0<=temp<16 : 
        print(temp,"C, Quite chilly! Don’t forget your coat")
    elif  16<=temp<23:
        print(temp,"C, Oh, its a nice a day for a piknik")
    elif 24 <=temp< 32:
        print(temp,"C, Wow, it's Hot, Go chill in the beach")
    else:
        print(temp,"C, Be careful, it's superhot, keep safe")

main()

