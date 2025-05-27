let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    for (let fruit of groceries.fruits) {
        console.log(fruit)
    }
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    shopping = groceries;
    groceries.totalPrice = "35$"
    groceries.other.paid = false;

    console.log(shopping);
    console.log("groceries:", groceries);




    console.log("user:", user);
    console.log("client:", client);

}

cloneGroceries()

// the output are : user: John , client: Betty.
// user doesn't change cause the change applied to a string (primitive type).

// Both shopping and groceries reflect the same changes.
// This is because objects are passed by reference, not by value.






