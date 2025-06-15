let correctAnswers = 0;
let currentQuestionIndex = 0;

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

const displayQuestion = (req, res) => {
  const question = triviaQuestions[currentQuestionIndex];
  res.send(question.question);
};

const submitAnswer = (req, res) => {
  const userAnswer = req.body.answer.toLowerCase();
  const correctAnswer =
    triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    res.send("Your Answer is Correct");
    correctAnswers++;
  } else {
    res.send("Your answer is False");
  }
  currentQuestionIndex++;
};

const displayScore = (req, res) => {
  if (currentQuestionIndex === triviaQuestions.length) {
    res.send(`Here is your final score ${correctAnswers}`);
  } else {
    res.send("The quiz is not finished yet");
  }
};

module.exports = { displayQuestion, submitAnswer, displayScore };
