import React, { useState } from "react";

function FormInput() {
  const [inputValue, setInputValue] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputValue }),
    });

    const data = await response.text();
    setServerMessage(data);
  };

  return (
    <div>
      <h1>Post to Server:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your text here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{serverMessage}</p>
    </div>
  );
}

export default FormInput;
