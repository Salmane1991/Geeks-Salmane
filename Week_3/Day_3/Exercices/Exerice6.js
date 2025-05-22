let navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
let logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);

let ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

let firstItem = ul.firstElementChild;
let lastItem = ul.lastElementChild;

console.log(firstItem.textContent);
console.log(lastItem.textContent);
