import { useState } from "react";
import "./App.css";
function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  function handleVote(language) {
    setLanguages(
      languages.map((lang) => {
        return lang.name === language
          ? { name: lang.name, votes: lang.votes + 1 }
          : lang;
      })
    );
  }

  return (
    <>
      <h1> Vote Your Language!</h1>
      {languages.map((lang) => (
        <div className="language-box" key={lang.name}>
          {lang.votes} {lang.name}{" "}
          <button onClick={() => handleVote(lang.name)}>Click Here</button>
        </div>
      ))}
    </>
  );
}

export default App;
