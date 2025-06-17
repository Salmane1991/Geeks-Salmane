import React from "react";

function Exercise1() {
  const hello = <p>Hello World!</p>;
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      {hello}
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default Exercise1;
