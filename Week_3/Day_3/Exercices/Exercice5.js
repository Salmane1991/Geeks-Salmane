let container = document.getElementById("container");
console.log(container);

let lists = document.querySelectorAll(".list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

for (let ul of lists) {
    ul.children[0].textContent = "Salmane";
}

for (let ul of lists) {
    ul.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

let secondListItems = lists[1].children;
for (let li of secondListItems) {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
}

let firstListItems = lists[0].children;
for (let li of firstListItems) {
    if (li.textContent === "Richard") {
        li.style.border = "1px solid black";
    }
}

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
    let names = [];
    for (let li of lists[0].children) {
        names.push(li.textContent);
    }
    alert("Hello " + names.join(" and "));
}
