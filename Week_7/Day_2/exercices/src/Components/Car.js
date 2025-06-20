import { useState } from "react";
import Garage from "./Garage";

function Car(props) {
  const [color, setColor] = useState("Red");
  return (
    <>
      <h1>
        The car is {color} {props.name}, it is {props.model} model
      </h1>
      <Garage size="Big" />
    </>
  );
}
export default Car;
