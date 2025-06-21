import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        nutsFree: false,
        lactoseFree: false,
        vegan: false,
      },
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      this.setState((prevState) => ({
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked,
        },
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      dietaryRestrictions,
    } = this.state;

    const params = new URLSearchParams({
      firstName,
      lastName,
      age,
      gender,
      destination,
      ...(dietaryRestrictions.lactoseFree && { lactoseFree: "on" }),
      ...(dietaryRestrictions.nutsFree && { nutsFree: "on" }),
      ...(dietaryRestrictions.vegan && { vegan: "on" }),
    });

    window.location.href = "http://localhost:3000/?" + params.toString();
  };

  render() {
    return (
      <div className="container">
        <h1>Travel Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input name="age" placeholder="Age" onChange={this.handleChange} />

          <div className="gender-section">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
              />{" "}
              Female
            </label>
          </div>

          <select name="destination" onChange={this.handleChange}>
            <option value="">-- Choose Destination --</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
          </select>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="nutsFree"
                checked={this.state.dietaryRestrictions.nutsFree}
                onChange={this.handleChange}
              />{" "}
              Nuts Free
            </label>
            <label>
              <input
                type="checkbox"
                name="lactoseFree"
                checked={this.state.dietaryRestrictions.lactoseFree}
                onChange={this.handleChange}
              />{" "}
              Lactose Free
            </label>
            <label>
              <input
                type="checkbox"
                name="vegan"
                checked={this.state.dietaryRestrictions.vegan}
                onChange={this.handleChange}
              />{" "}
              Vegan
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
