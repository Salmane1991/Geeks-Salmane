function hotelCost() {
    let nights = prompt("How many nights?");
    while (nights === "" || isNaN(nights)) {
        nights = prompt("Please enter a valid number of nights:");
    }
    return Number(nights) * 140;
}

function planeRideCost() {
    let destination = prompt("What is your destination?");
    while (destination === "" || typeof destination !== "string") {
        destination = prompt("Please enter a valid destination!");
    }

    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days = prompt("How many days will you rent the car?");
    while (days === "" || isNaN(days)) {
        days = prompt("Please enter a valid number of days:");
    }

    let cost = Number(days) * 40;

    if (days > 10) {
        cost *= 0.95;
    }

    return cost;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();

    console.log("The hotel cost: $" + hotel + ", the plane tickets cost: $" + plane + ", the car rental cost: $" + car);
    console.log("Total vacation cost: $" + (hotel + plane + car));
}

totalVacationCost();
