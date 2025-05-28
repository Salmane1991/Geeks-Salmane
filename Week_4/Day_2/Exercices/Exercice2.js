const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, index) => {

    let order = (index + 1 === 1) ? "st" :
        (index + 1 === 2) ? "nd" :
            (index + 1 === 3) ? "rd" : "th";

    console.log(`${index + 1}${order} choice is ${color}`);

}
)