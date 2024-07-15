import React, { useState } from "react";
import "./index.css"

const App = () => {
  const [randomVal, setRandomVal] = useState(0);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);

  const handleMinChange = (e) => {
    setMinVal(Number(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxVal(Number(e.target.value));
  };

  const clickFunc = () => {
    setRandomVal(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="maxVal">
            Max: {maxVal}
            <input type="number" value={maxVal} onChange={handleMaxChange} />
          </div>
          <div className="minVal">
            Min: {minVal}
            <input type="number" value={minVal} onChange={handleMinChange} />
          </div>
          <button onClick={clickFunc}>Get Random Number</button>
          <div>Random Value: {randomVal}</div>
        </div>
      </div>
    </>
  );
};

export default App;
