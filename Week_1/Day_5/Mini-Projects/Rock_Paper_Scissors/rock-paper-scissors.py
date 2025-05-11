from game import Game

def get_user_menu_choice():
    user_input = input("Choose an option:\n(p) Play a new game\n(s) Show scores\n(q) Quit\n").lower()
    if user_input in ['p', 's', 'q']:
        return user_input
    else:
        print("Invalid choice.")
        return get_user_menu_choice()

def print_results(results):
    print("Game summary:")
    print(f"You won: {results['win']} times")
    print(f"You lost: {results['loss']} times")
    print(f"You drew: {results['draw']} times")
    print("Thanks for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        user_choice = get_user_menu_choice()
        if user_choice == 'p':
            game = Game()
            result = game.play()
            if result in results:
                results[result] += 1
        elif user_choice == 's':
            print_results(results)
        elif user_choice == 'q':
            print_results(results)
            break

if __name__ == '__main__':
    main()
