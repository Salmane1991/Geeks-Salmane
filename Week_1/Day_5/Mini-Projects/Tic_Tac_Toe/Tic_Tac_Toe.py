board = [[" " for _ in range(3)] for _ in range(3)]

def display_board():
    print("TIC TAC TOE")
    print("***************")
    for row in board:
        print("* " + "|".join(row) + " *")
    print("***************")

def player_input(player):
    print(f"Player {player}'s turn...")
    row = int(input("Enter row: ")) - 1
    col = int(input("Enter column: ")) - 1
    if board[row][col] == " ":
        board[row][col] = player
    else:
        print("This spot is taken. Try again.")
        player_input(player)

def check_win(player):
    for row in board:
        if all(cell == player for cell in row):
            return True
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)):
        return True
    if all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def is_full():
    return all(all(cell != " " for cell in row) for row in board)

def play():
    print("Welcome to TIC TAC TOE!")
    display_board()
    current_player = "X"
    while True:
        player_input(current_player)
        display_board()
        if check_win(current_player):
            print(f"Player {current_player} wins!")
            break
        if is_full():
            print("It's a tie!")
            break
        current_player = "O" if current_player == "X" else "X"

play()
