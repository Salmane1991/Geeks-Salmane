import { useState } from "react";

function Phone() {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <>
      <h1>My phone is a {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default Phone;
