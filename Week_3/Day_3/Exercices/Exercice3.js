const coins = {
    quarter: 0.25,
    dimes: 0.10,
    nickel: 0.05,
    penny: 0.01

}



function changeEnough(itemPrice, amountOfChange) {
    let totalChange = 0;
    for (let coin in amountOfChange) {
        let totalQuarters = amountOfChange[0] * coins["quarter"]
        let totalDimes = amountOfChange[1] * coins["dimes"]
        let totalNickels = amountOfChange[2] * coins["nickel"]
        let totalPennies = amountOfChange[3] * coins["penny"]


        totalChange = totalQuarters + totalDimes + totalNickels + totalPennies
    }
    return totalChange > itemPrice

}

console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))
