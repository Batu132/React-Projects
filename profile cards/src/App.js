import React from "react";
import "./index.css";
import Cards from "./Cards.js";

function App() {
  return (
    <>
      <div className="container">
        <Cards
          description="Tyrion, portrayed by Peter Dinklage, is known for his sharp wit, intelligence, and complex character arc. Despite facing prejudice due to his stature, he navigates the treacherous political landscape of Westeros with cunning and charisma."
          header=" Tyrion Lannister"
        />
        <Cards
          description="Played by Bryan Cranston, Walter White is a high school chemistry teacher turned methamphetamine manufacturer. His transformation from a mild-mannered teacher to a ruthless drug kingpin is one of the most compelling character developments in TV history."
          header="Walter White"
        />
        <Cards
          description="Portrayed by Millie Bobby Brown, Eleven is a young girl with psychokinetic abilities. She escapes from a secret government lab and becomes an integral part of a group of kids fighting supernatural threats. Her bravery, loyalty, and growth throughout the series make her a standout character."
          header="Eleven"
        />
      </div>
    </>
  );
}

export default App;
