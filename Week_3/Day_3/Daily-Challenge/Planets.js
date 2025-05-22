let planets = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "orange" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 80, color: "brown" },
    { name: "Saturn", moons: 83, color: "gold" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "purple" }
];


let section = document.querySelector(".listPlanets")

for (let item of planets) {

    let div = document.createElement("div")
    div.className = "planet"
    div.classList.add(item.name.toLowerCase())
    div.textContent = item.name
    div.style.backgroundColor = item.color;

    let divMoon = item.moons

    for (let x = 0; x < item.moons; x++) {
        let createDivMoon = document.createElement("div")
        createDivMoon.classList.add("moon")
        div.appendChild(createDivMoon)

    }


    section.appendChild(div);
}

let divMoon = document.querySelector(".planet")



