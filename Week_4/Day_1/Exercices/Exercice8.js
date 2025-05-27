function makeJuice(size) {
    let ingredients = [];

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        let paragraph = document.querySelector("p");
        paragraph.innerHTML = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
    }
    addIngredients("Banana", "Apple", "Kiwi")
    addIngredients("Strawberry", "orange", "Avocado")

    function displayJuice() {
        let h1 = document.querySelector("h1");

        h1.innerHTML = `The client wants a ${size} juice, containing` + ingredients.join(", ")

    }
    displayJuice()


}

makeJuice("M");

