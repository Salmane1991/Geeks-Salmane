let nav = document.querySelector("nav");
let div = document.createElement("div");
nav.appendChild(div);

div.innerHTML = (function (user_name) {
    return `Welcome ${user_name}`;
})("Salmane")

const img = document.createElement("img");
img.src = "http://placehold.it/350x350";
img.width = 400;
img.height = 150;
div.appendChild(img);