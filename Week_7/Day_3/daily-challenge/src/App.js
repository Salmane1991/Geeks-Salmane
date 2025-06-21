import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();

    for (let key in formData) {
      const value = formData[key];
      if (typeof value === "boolean") {
        if (value) {
          params.append(key, "on");
        }
      } else {
        params.append(key, value);
      }
    }

    window.location.href = `http://localhost:3000/?${params.toString()}`;
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sample form</h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />
        <label>Select your destination</label>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option>-- Please Choose a destination --</option>
          <option value="Germany">Germany</option>
          <option value="Norway">Norway</option>
          <option value="Japan">Japan</option>
        </select>

        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="output">
        <h2>Entered information:</h2>
        <p>
          <em>Your name:</em>{" "}
          <span>
            {formData.firstName} {formData.lastName}
          </span>
        </p>
        <p>
          <em>Your age:</em> <span>{formData.age}</span>
        </p>
        <p>
          <em>Your gender:</em> <span>{formData.gender}</span>
        </p>
        <p>
          <em>Your destination:</em> <span>{formData.destination}</span>
        </p>
        <p>
          <em>Your dietary restrictions:</em>
        </p>
        <p>**Nuts free : {formData.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {formData.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {formData.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;
