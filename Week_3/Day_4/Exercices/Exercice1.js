let h1 = document.querySelector("h1")
// console.log(h1.textContent)

allP = document.querySelectorAll("p")
allP.forEach(function (p, index) {
    if (index === 3) {
        p.remove()
    }

}

)

let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";

});








let h3 = document.querySelector("h3")
h3.addEventListener("click", function () {
    h3.style.display = "none";

});

let button = document.querySelector("button")
let allParagraphs = document.querySelectorAll("p")

button.addEventListener("click", function () {


    allParagraphs.forEach(function (p) {
        p.style.fontWeight = "bold";
    })

});

h1.addEventListener("mouseover", function () {

    let randomNum = Math.floor(Math.random() * 100);
    h1.style.fontSize = randomNum + "px";


});

allP.forEach(function (p, index) {
    if (index === 1) {
        p.addEventListener("mouseover", function () {
            p.classList.add("fade-out");
        })

    }

});



