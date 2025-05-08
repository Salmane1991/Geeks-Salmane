data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = []
correct_answers = []

def ask_question():
    for item in data:
        question = item["question"]
        correct_answer = item["answer"]        
        user_answer = input(question + " ")
        if user_answer.lower() != correct_answer.lower():
            wrong_answers.append({
                "question": question,
                "your_answer": user_answer,
                "correct_answer": correct_answer
            })
        else:
            correct_answers.append(user_answer)
    return len(wrong_answers), len(correct_answers)

def num_answers():
    wrong, correct = ask_question()
    print("You have " + str(wrong) + " wrong answers and " + str(correct) + " correct answers!")
    if wrong > 0:
        print("Here's what you got wrong:")
        for item in wrong_answers:
            print("Q:", item["question"])
            print("Your answer:", item["your_answer"])
            print("Correct answer:", item["correct_answer"])
            print()
    if wrong > 3:
        print("You had more than 3 wrong answers. Try again!")

num_answers()
