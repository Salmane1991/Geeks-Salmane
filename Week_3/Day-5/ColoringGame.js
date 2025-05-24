window.onload = function () {
    let color = "";
    let allDivs = document.querySelectorAll("#sidebar div")

    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].addEventListener("mousedown", function (event) {
            color = event.target.style.backgroundColor;

        })
    }
    const divGrid = document.querySelector(".grid");

    function genDiv() {
        const count = 1440;
        for (let i = 0; i < count; i++) {
            const div = document.createElement("div");
            divGrid.appendChild(div);
        }
    }

    genDiv();

    let gridDivs = document.querySelectorAll(".grid div")
    for (let j = 0; j < gridDivs.length; j++) {
        gridDivs[j].addEventListener("mousedown", function (event) {
            event.target.style.backgroundColor = color;
            isMouseDown = true;

        })
    }

    let isMouseDown = false;

    for (let k = 0; k < gridDivs.length; k++) {
        gridDivs[k].addEventListener("mouseover", function (event) {
            if (isMouseDown === true) {
                event.target.style.backgroundColor = color;

            }
        })
    }

    document.body.addEventListener("mouseup", function () {
        isMouseDown = false;
    });

    let button = document.querySelector("button")
    button.addEventListener("click", function () {
        for (let h = 0; h < gridDivs.length; h++) {
            gridDivs[h].style.backgroundColor = "white";
        }
    })

}













