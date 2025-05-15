from menu_item import MenuItem
from menu_manager import MenuManager

manager = MenuManager()


def show_user_menu():
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    user_choice = input("Please choose a letter from the Menu?")
    if user_choice == 'V':
        name = input("Which item do you want to view?")
        print(manager.get_by_name(name))


show_user_menu()
