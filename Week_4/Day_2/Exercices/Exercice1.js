const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}`)
})

const ifViolet = colors.some(color => color === ("Violet"));
if (ifViolet) {
    console.log("Yeah");
} else {
    console.log("No...");
}