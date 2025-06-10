import person from "./data.js";

function getAverageAge(ages) {
  let totalAges = 0;

  ages.forEach((element) => {
    totalAges += element.age;
  });

  let avergeAge = totalAges / ages.length;
  console.log(avergeAge);
}

getAverageAge(person);
