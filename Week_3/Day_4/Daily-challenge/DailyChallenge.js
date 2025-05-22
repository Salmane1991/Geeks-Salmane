let form = document.querySelector("form");

let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let story = document.getElementById("story");
let shuffle = document.getElementById("shuffle");

let templates = [];
let lastIndex = -1;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        person.value.trim() !== "" &&
        adjective.value.trim() !== "" &&
        verb.value.trim() !== "" &&
        noun.value.trim() !== "" &&
        place.value.trim() !== ""
    ) {
        templates = [
            `${person.value} went to ${place.value} to ${verb.value} a ${adjective.value} ${noun.value}.`,
            `In ${place.value}, a ${adjective.value} ${noun.value} was waiting for ${person.value} to ${verb.value}.`,
            `Everyone saw ${person.value} ${verb.value} a ${adjective.value} ${noun.value} at ${place.value}.`
        ];

        story.textContent = templates[0];
        lastIndex = 0;
    }
});

shuffle.addEventListener("click", function () {
    if (templates.length > 0) {
        let index;
        do {
            index = Math.floor(Math.random() * templates.length);
        } while (index === lastIndex);

        lastIndex = index;

        story.textContent = "";
        story.textContent = templates[index];
    }
});
