const emojis = [
  { symbol: "🍕", name: "Pizza" },
  { symbol: "🐶", name: "Dog" },
  { symbol: "😊", name: "Smile" },
  { symbol: "🏀", name: "Basketball" },
  { symbol: "✈️", name: "Airplane" },
  { symbol: "🌮", name: "Tacos" },
];

const emojiDiv = document.getElementById("emoji");
const form = document.getElementById("guessForm");
const optionsDiv = document.getElementById("options");
const scoreDisplay = document.getElementById("score");

let currentEmoji = emojis[Math.floor(Math.random() * emojis.length)];
emojiDiv.textContent = currentEmoji.symbol;

let guesses = [currentEmoji];
while (guesses.length < 4) {
  const random = emojis[Math.floor(Math.random() * emojis.length)];
  if (!guesses.includes(random)) {
    guesses.push(random);
  }
}

guesses.sort(() => Math.random() - 0.5);

guesses.forEach((option) => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "guess";
  input.value = option.name;
  label.appendChild(input);
  label.appendChild(document.createTextNode(" " + option.name));
  optionsDiv.appendChild(label);
  optionsDiv.appendChild(document.createElement("br"));
});

const hidden = document.createElement("input");
hidden.type = "hidden";
hidden.name = "correct";
hidden.value = currentEmoji.name;
form.appendChild(hidden);
