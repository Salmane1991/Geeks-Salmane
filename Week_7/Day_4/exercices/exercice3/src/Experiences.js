import data from "./data.json";
import React, { Component } from "react";

class Example3 extends Component {
  render() {
    return (
      <div>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <div>
              <img src={exp.logo} alt="image"></img>{" "}
            </div>

            {exp.roles.map((role, index) => (
              <div key={index}>
                <a href={exp.url}>{exp.companyName}</a>
                <p>
                  {" "}
                  <strong>{role.title}</strong>
                </p>
                <p>{role.endDate}</p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
