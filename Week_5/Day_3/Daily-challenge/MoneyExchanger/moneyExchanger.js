let From = document.getElementById("from");
let To = document.getElementById("to");
let button = document.getElementById("submit");
let divResult = document.getElementById("result");
let amount = document.getElementById("amount");
let flipBtn = document.getElementById("flip");

let urlCurr =
  "https://v6.exchangerate-api.com/v6/2d8309d0db701f3b396ac86b/codes";

async function getData() {
  try {
    const response = await fetch(urlCurr);
    if (!response.ok) {
      throw new Error(`Response Status : ${response.status}`);
    }
    const json = await response.json();

    let curr = json.supported_codes;
    let cur = curr.forEach((element) => {
      let createOption = document.createElement("option");
      From.appendChild(createOption);
      createOption.innerHTML = element[0] + "-" + element[1];
      createOption.value = element[0];
      let createopt = document.createElement("option");
      To.appendChild(createopt);
      createopt.innerHTML = element[0] + "-" + element[1];
      createopt.value = element[0];
    });
  } catch (error) {
    console.log(error);
  }
}

getData();

button.addEventListener("click", function (e) {
  let urlConv = `https://v6.exchangerate-api.com/v6/2d8309d0db701f3b396ac86b/pair/${From.value}/${To.value}/${amount.value}`;
  e.preventDefault();
  async function convertCurrency() {
    try {
      const response = await fetch(urlConv);
      if (!response.ok) {
        throw new Error(`Response Status : ${response.status}`);
      }
      const json = await response.json();
      let conv = json.conversion_result;

      divResult.innerHTML = `${conv} ${To.value}`;
    } catch (error) {
      console.log(error);
    }
  }
  convertCurrency();
});

flipBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let fromValue = From.value;
  From.value = To.value;
  To.value = fromValue;
});
