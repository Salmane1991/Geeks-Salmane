import React from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div>
      <Exercise1 />
      <Exercise2
        favAnimals={user.favAnimals}
        firstName={user.firstName}
        lastName={user.lastName}
      />
      <Exercise3 />
    </div>
  );
}

export default App;
