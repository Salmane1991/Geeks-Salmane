import quotes from "./QuotesDatabase";
import React, { useState } from "react";

const colors = [
  "tomato",
  "teal",
  "slateblue",
  "seagreen",
  "goldenrod",
  "crimson",
  "mediumvioletred",
  "darkcyan",
  "peru",
  "orchid",
  "steelblue",
  "cadetblue",
  "coral",
  "darkmagenta",
  "indigo",
  "dodgerblue",
  "olive",
  "firebrick",
  "darkorange",
  "mediumseagreen",
];

function QuoteBox() {
  const index = Math.floor(Math.random() * quotes.length);

  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [quote, setQuote] = useState(quotes[index]);

  const handleClick = () => {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    if (newQuote === quote) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }

    if (newColor === color) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    setQuote(newQuote);
    setColor(newColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        transition: "background-color 0.4s ease",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "40px",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            color: color,
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          “{quote.quote}”
        </h1>
        <p
          style={{
            color: color,
            fontWeight: "bold",
            fontStyle: "italic",
            marginBottom: "30px",
            alignSelf: "flex-end",
          }}
        >
          – {quote.author}
        </p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: color,
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            alignSelf: "flex-end",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
