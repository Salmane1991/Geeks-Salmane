import { useState } from "react";

function Events() {
  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={clickMe}>Click</button>
        <br />
        <input onKeyDown={handleKeyDown} placeholder="Press the ENTER key!" />
      </div>

      <div>
        <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>
      </div>
    </>
  );
}

export default Events;
