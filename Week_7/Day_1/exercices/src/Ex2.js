import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

function Exercise2(props) {
  return (
    <div>
      <h3>{props.firstName}</h3>
      <h3>{props.lastName}</h3>
      <UserFavoriteAnimals favAnimals={props.favAnimals} />
    </div>
  );
}

export default Exercise2;
