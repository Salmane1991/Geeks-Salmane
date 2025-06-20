import React from "react";
import Car from "./Components/Car";
import Color from "./Components/Color";
import Events from "./Components/Events";
import Phone from "./Components/Phone";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car name={carinfo.name} model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
