const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let emojis = [
  { emoji: "🐶", name: "Dog" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "✈️", name: "Airplane" },
  { emoji: "😊", name: "Smile" },
  { emoji: "🌮", name: "Tacos" },
];

let score = 0;
let currentRound = generateNewRound();

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function generateNewRound() {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const otherOptions = emojis.filter((e) => e.name !== correctEmoji.name);
  const randomOthers = shuffle(otherOptions).slice(0, 3);
  const allChoices = shuffle([...randomOthers, correctEmoji]);

  return { correct: correctEmoji, choices: allChoices };
}

app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Emoji Guessing Game</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Guess the Emoji</h1>
      <p>Score: ${score}</p>
      <div id="emoji">${currentRound.correct.emoji}</div>
      <form action="/guess" method="POST">
        ${currentRound.choices
          .map(
            (choice) => `
          <div>
            <input type="radio" id="${choice.name}" name="guess" value="${choice.name}" required>
            <label for="${choice.name}">${choice.name}</label>
          </div>
        `
          )
          .join("")}
        <input type="hidden" name="correct" value="${
          currentRound.correct.name
        }">
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `;
  res.send(html);
});

app.post("/guess", (req, res) => {
  const guess = req.body.guess;
  const correct = req.body.correct;

  if (guess === correct) {
    score++;
    currentRound = generateNewRound();
    res.redirect("/");
  } else {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Wrong</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Wrong</h1>
        <p>Your score: ${score}</p>
        <a href="/">Try Again</a>
      </body>
      </html>
    `;
    res.send(html);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
