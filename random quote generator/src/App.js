import "./index.css";
import { useState } from "react";

function App() {
  const [randomQuote, setRandomQuote] = useState("");

  const generateQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let randomNum = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomNum].text);
      });
  };

  return (
    <>
      <div className="container">
        <div className="quote">{randomQuote}</div>
        <button className="button" onClick={generateQuote}>
          Get Quote
        </button>
      </div>
    </>
  );
}

export default App;
