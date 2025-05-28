const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


const userName = [];

const usernames = gameInfo.forEach(name => userName.push(`${name.username}!`))
// console.log(userName)


const winners = []
const userScore = gameInfo.filter(name => name.score > 5);
const scoreNames = userScore.forEach((name) => { winners.push(name.username) })

console.log(winners)