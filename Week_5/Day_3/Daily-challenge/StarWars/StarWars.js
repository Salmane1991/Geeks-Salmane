const divCont = document.getElementById("charInfo");
const button = document.getElementById("findBtn");

async function getData() {
  const varUrl = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${varUrl}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.result;
}

button.addEventListener("click", async function () {
  divCont.innerHTML = `<div class="loader"><i class="fas fa-spinner fa-spin"></i><p>Loading...</p></div>`;

  const data = await getData();
  const { name, height, gender, birth_year, homeworld } = data.properties;

  const homeworldResponse = await fetch(homeworld);
  const homeworldData = await homeworldResponse.json();
  const homeworldName = homeworldData.result.properties.name;

  divCont.innerHTML = `
    <h1>${name}</h1>
    <p>Height: ${height}</p>
    <p>Gender: ${gender}</p>
    <p>Birth Year: ${birth_year}</p>
    <p>Home World: ${homeworldName}</p>
  `;
});
