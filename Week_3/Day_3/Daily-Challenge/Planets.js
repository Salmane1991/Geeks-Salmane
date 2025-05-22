let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
let section = document.querySelector(".listPlanets")

for (let item of planets) {

    let div = document.createElement("div")
    div.className = "planet"
    div.classList.add(item.toLowerCase())
    div.textContent = item
    section.appendChild(div);
}
