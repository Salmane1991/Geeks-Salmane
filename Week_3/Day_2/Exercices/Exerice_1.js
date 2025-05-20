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

// for (i = 0; i < people.length - 1; i++)
//     console.log(people[i])



for (let i = 0; i < people.length; i++) {

    console.log(people[i])

    if (people[i] === "Devon") {
        break

    }
}







// console.log(people)


