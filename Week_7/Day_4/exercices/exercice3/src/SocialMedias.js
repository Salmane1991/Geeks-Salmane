import data from "./data.json";
import React, { Component } from "react";

class Example1 extends Component {
  render() {
    return (
      <ul>
        <h1>
          {data.SocialMedias.map((socialMedia, index) => (
            <li key={index}>{socialMedia}</li>
          ))}
        </h1>
      </ul>
    );
  }
}

export default Example1;
