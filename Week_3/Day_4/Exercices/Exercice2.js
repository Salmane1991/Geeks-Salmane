let form = document.getElementById("nameForm");
let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let ul = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (firstNameInput.value.trim() !== "" && lastNameInput.value.trim() !== "") {
        ul.innerHTML = "";

        let li1 = document.createElement("li");
        li1.textContent = firstNameInput.value;
        ul.appendChild(li1);

        let li2 = document.createElement("li");
        li2.textContent = lastNameInput.value;
        ul.appendChild(li2);
    }
});
