import data from "./data.json";
import React, { Component } from "react";

class Example2 extends Component {
  render() {
    return (
      <div>
        {data.Skills.map((object, index) => (
          <div key={index}>
            <h1>{object.Area}</h1>
            <div>
              <ul>
                {object.SkillSet.map((skill, index) => (
                  <li key={index}>{skill.Name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
