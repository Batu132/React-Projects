import "./index.css";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      title: "Ulusal Egemenlik ve Çocuk Bayramı",
      date: "23 Nisan",
    },
    {
      id: 2,
      title: "Zafer Bayramı",
      date: "30 Ağustos",
    },
    {
      id: 3,
      title: "Cumhuriyet Bayramı",
      date: "29 Ekim",
    },
  ];

  const [holidays, setHolidays] = useState(data);

  return (
    <>
      <div className="container">
        <h1>National Holiday Dates</h1>
        {holidays.map((holiday) => (
          <div className="holiday" key={holiday.id}>
            <div>{holiday.title}</div>
            <div>{holiday.date}</div>
          </div>
        ))}
        <button onClick={() => setHolidays([])}>Clear All</button>
      </div>
    </>
  );
}

export default App;
