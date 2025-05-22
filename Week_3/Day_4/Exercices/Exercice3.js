let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
    allBoldItems.forEach(function (p) {

        p.style.color = "blue";

    }
    )
};

function returnItemsToDefault() {
    allBoldItems.forEach(function (p) {
        p.style.color = "black";
    }
    )
};

getBoldItems();
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight)
paragraph.addEventListener("mouseout", returnItemsToDefault)

