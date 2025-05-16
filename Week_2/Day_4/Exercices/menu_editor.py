from menu_item import MenuItem
from menu_manager import MenuManager

manager = MenuManager()


def show_user_menu():
    print("\n=== Menu ===")
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    print("Exit (X)")

    while True:
        user_choice = input("Please choose a letter from the Menu: ").upper()

        if user_choice == 'V':
            item_name = input("Which item do you want to view? ")
            print(manager.get_by_name(item_name))

        elif user_choice == 'A':
            add_item_to_menu()

        elif user_choice == 'D':
            remove_item_from_menu()

        elif user_choice == 'U':
            update_item_from_menu()

        elif user_choice == 'S':
            show_restaurant_menu()

        elif user_choice == 'X':
            show_restaurant_menu()
            print("Goodbye!")
            break

        else:
            print("Invalid option. Please try again.")


def add_item_to_menu():
    item_name = input("Enter the item name: ")
    price = int(input("Enter the item price: "))
    item = MenuItem(item_name, price)
    item.save()
    print('item was added successfully')


def remove_item_from_menu():
    item_name = input("Enter the item name you want to delete: ")
    item = MenuItem(item_name, 0)
    try:
        item.delete()
        print("Item was deleted successfully")
    except Exception as e:
        print("Item was not deleted. Error:", e)


def update_item_from_menu():
    old_item_name = input("Which item you want to update?")
    price_old_item = int(input("How much its price?"))
    new_item_name = input("What is the name of the new item?")
    price_new_item = int(input("What is the price of the new item?"))
    old_item = MenuItem(old_item_name, price_old_item)
    try:
        old_item.update(new_item_name, price_new_item)
        print("Item was updated successfully")
    except Exception as e:
        print("Item was not updated. Error:", e)


def show_restaurant_menu():
    items = manager.all_items()
    print("\n== Restaurant Menu ==")
    for item in items:
        print(item)


if __name__ == "__main__":
    show_user_menu()
