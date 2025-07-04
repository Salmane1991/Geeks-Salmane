import { useState } from "react";

function CalculateNumbers() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const handleFirstChange = (event) => {
    setFirstNum(event.target.value);
  };
  const handleSecondChange = (event) => {
    setSecondNum(event.target.value);
  };

  const handleOperation = (event) => {
    setOperation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newResult = "";

    if (operation === "+") {
      newResult = +firstNum + +secondNum;
    }
    if (operation === "-") {
      newResult = +firstNum - +secondNum;
    }
    if (operation === "*") {
      newResult = +firstNum * +secondNum;
    }

    if (operation === "/") {
      newResult = +firstNum / +secondNum;
    }

    setResult(newResult);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Adding Two Numbers</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          padding: "30px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <input
          type="text"
          value={firstNum}
          onChange={handleFirstChange}
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            textAlign: "center",
            width: "200px",
          }}
        ></input>
        <input
          type="text"
          value={secondNum}
          onChange={handleSecondChange}
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            textAlign: "center",
            width: "200px",
          }}
        ></input>
        <select
          value={operation}
          style={{
            backgroundColor: "lightblue",
            color: "black",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            textAlign: "center",
          }}
          onChange={handleOperation}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button
          style={{
            backgroundColor: "red",
            fontWeight: "bold",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Calculate
        </button>
        <h1 style={{ backgroundColor: "lightgreen" }}>{result}</h1>
      </form>
    </div>
  );
}

export default CalculateNumbers;
