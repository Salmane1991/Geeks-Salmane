const divContainer = document.getElementById("gifContainer");
const form = document.querySelector("#gifForm");
const deleteAllBtn = document.getElementById("deleteAll");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = document.getElementById("gif").value;
  const url = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

  async function getGiphy() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status : ${response.status}`);
      }

      const json = await response.json();

      const gifBox = document.createElement("div");
      const img = document.createElement("img");
      img.src = json.data.images.original.url;
      const button = document.createElement("button");
      button.textContent = "Delete";

      button.addEventListener("click", function () {
        gifBox.remove();
      });

      gifBox.appendChild(img);
      gifBox.appendChild(button);
      divContainer.appendChild(gifBox);
    } catch (error) {
      divContainer.innerHTML = error.message;
    }
  }

  getGiphy();
});

deleteAllBtn.addEventListener("click", function () {
  divContainer.innerHTML = "";
});
