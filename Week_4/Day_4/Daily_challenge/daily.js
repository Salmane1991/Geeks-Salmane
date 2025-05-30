let button = document.querySelector("button");
button.addEventListener("click", function (event) {
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let userLastName = document.getElementById("lastName").value
    let json = document.querySelector("h1")

    let jsonObject = { name: userName, lastName: userLastName }
    jsonString = JSON.stringify(jsonObject)

    json.innerHTML = jsonString

})
