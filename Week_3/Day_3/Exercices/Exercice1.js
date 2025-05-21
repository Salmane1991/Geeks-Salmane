function displayNumbersDivisible(divisor) {

    let outcome = "";
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0) {

            outcome += " " + i;
            sum += i

        }

    }
    console.log("Outcome for " + divisor + " is :" + outcome)
    console.log("The sum is :" + sum)
}
displayNumbersDivisible(3)

displayNumbersDivisible(45)


