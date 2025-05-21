const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0


    for (let item of shoppingList) {

        if (item in prices && stock[item] > 0) {
            let price = prices[item]
            console.log("Stock for " + item + " is " + stock[item])
            stock[item]--
            console.log("Stock for " + item + " is now  " + stock[item])

            totalPrice += price

        }
    }

    return totalPrice

}

let fullPrice = myBill()
console.log(fullPrice)
