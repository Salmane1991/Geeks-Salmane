string = input("Give me a string: ")
i = 0

while i < len(string) - 1:
    if string[i] == string[i + 1]:
        string = string[:i] + string[i + 1:]
    else:
        i += 1

print(string)