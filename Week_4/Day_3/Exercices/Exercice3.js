const users = { user1: 18273, user2: 92833, user3: 90315 }

const allUsers = Object.entries(users);

// console.log(allUsers)

const doubleID = allUsers.map(([key, value]) => [key, value * 2]);

console.log(doubleID)

