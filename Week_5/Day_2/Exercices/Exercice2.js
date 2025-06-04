async function getData() {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status : ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
