const morse = `{
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---",
  "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("Morse object is empty.");
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence").toLowerCase();
    const result = [];

    for (let char of userInput) {
      if (!(char in morseJS)) {
        reject(`Character "${char}" not found in Morse dictionary.`);
        return;
      }
      result.push(morseJS[char]);
    }

    resolve(result);
  });
}

function joinWords(morseTranslation) {
  document.body.innerHTML = morseTranslation.join("<br>");
}

toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((error) => console.log(error));
