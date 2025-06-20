import { useState, useEffect } from "react";

function Color(props) {
  const [color, setColor] = useState("Red");
  useEffect(() => {
    setColor("Yellow");
    alert("useEffect reached");
  }, []);
  return (
    <>
      <h1>My Favorite Color is {color}</h1>
      <button onClick={() => setColor("Blue")}>Change Color</button>
    </>
  );
}

export default Color;
