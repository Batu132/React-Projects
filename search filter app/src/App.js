import "./index.css";
import { useState } from "react";

function App() {
  const [names, setNames] = useState("");

  const handleChange = (e) => {
    setNames(e.target.value);
  };

  const data = [
    {
      id: 1,
      name: "Jayson Tatum",
      position: "Small Forward",
    },
    {
      id: 2,
      name: "Kristaps Porzingis",
      position: "Center",
    },
    {
      id: 3,
      name: "Al Horford",
      position: "Center",
    },
    {
      id: 4,
      name: "Jaylen Brown",
      position: "Small Forward",
    },
    {
      id: 5,
      name: "Derrick White",
      position: "Shooting Guard",
    },
    {
      id: 6,
      name: "Marcus Smart",
      position: "Point Guard",
    },
  ];

  return (
    <>
      <div className="container">
        <h1>Celtics Roster</h1>
        <input
          type="text"
          placeholder="Enter a name"
          value={names}
          onChange={handleChange}
        />
        <div className="names">
          {data
            .filter((val) => {
              if (names === "") {
                return val;
              } else if (val.name.toLowerCase().includes(names.toLowerCase())) {
                return val;
              }
              return null;
            })
            .map((player) => (
              <div className="all-names" key={player.id}>
                <p>Name: {player.name}</p>
                <p>Position: {player.position}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
