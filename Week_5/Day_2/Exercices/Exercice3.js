async function getData() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`Response Status : ${response.status}`);
    }
    const json = await response.json();
    const result = json.result;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
