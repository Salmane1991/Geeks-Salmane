const products = require("./products");

function getProduct(nameToFInd) {
  const found = products.find((p) => p.name === nameToFInd);
  console.log(found);
}

getProduct("iPhone X");
