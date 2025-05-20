// Exercice 1

const people = ["Greg", "Mary", "Devon", "James"];

people.splice(people.indexOf("Greg"), 1);

people.splice(2, 1, "Jason");

people.push("Salmane");

// console.log(people.indexOf("Mary"))

// console.log(people.slice(1))


// console.log(people.indexOf("Foo"))
// "The result is -1 cause it is not in the array people"

// let last = people[people.length - 1];
// console.log(last)

// for (i = 0; i < people.length; i++) {
//     console.log(people[i])
// }



// for (let i = 0; i < people.length; i++) {

//     console.log(people[i])

//     if (people[i] === "Devon") {
//         break

//     }
// }


// Exercice 2
// const colors = ["Blue", "Green", "White", "Black", "Red"]
// const suffixes = ["st", "nd", "rd", "th", "th"]

// for (let i = 0; i < colors.length; i++) {
//     if (suffixes[i])
//         console.log(`my ${i + 1}${suffixes[i]} is ${colors[i]}`)
// }

// Exercice 3

// let user_input = prompt("Give me a random number");
// console.log(typeof user_input);

// while (Number(user_input) < 10) {
//     user_input = prompt("Too small! Give me a new number");
// }

// console.log("Thank you you entered " + user_input);

// Exercice 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// let tenant_name = building.nameOfTenants[1]
// let tenant_rooms = building.numberOfRoomsAndRent.dan[0]
// console.log(`The tenant is ${tenant_name}, and he has ${tenant_rooms} rooms`)

// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's new rent is:", building.numberOfRoomsAndRent.dan[1]);
// }

// Exercice 5

// const family = {
//     father: "Oussana",
//     mother: "Asma",
//     child: "Rim"
// };

// for (let key in family) {
//     console.log(key);
//     console.log(family[key]);

// }

// Exercice 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
// }

// let sentence = " ";
// for (let key in details) {
//     let sentenceKey = key
//     let sentenceValue = details[key]
//     sentence += sentenceKey + " " + sentenceValue + " ";


// }
// console.log(sentence.trim())



// Exercice 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let firstLetters = [];

for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i][0]);
}

firstLetters.sort();

let secretSocietyName = firstLetters.join("");

console.log(secretSocietyName); 