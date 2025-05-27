function weightEx(kg) {
    return kg * 1000 + " grams";
}

const weightExange = function howMg(kg) {
    return kg * 1000 + " grams";
}

console.log(weightEx(5));
console.log(weightExange(5));

//Declaration is hoisted, expression is not

const getWeight = (kg) => kg * 1000 + "grams"

console.log(getWeight(5));