// let stars = "";

// for (let i = 0; i < 6; i++) {
//     stars += "* ";
//     console.log(stars.trim());
// }

for (let row = 0; row < 6; row++) {
    let line = "";
    for (let star = 0; star <= row; star++) {
        line += "* ";
    }
    console.log(line.trim());
}
