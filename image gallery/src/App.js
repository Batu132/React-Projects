import React, { useState } from "react";
import "./styles.css";
import Images from "./Images";

const App = () => {

  const [selectedImg, setSelectedImg] = useState(Images[0])

  return
  <>
    <div className="hero">
      <div className="container">
        <div className="topImage">
          <img src={selectedImg} alt="" />
        </div>
        <div className="imgContainer">
          {Images.map((img,i) => (
            <img key= {i} src={img} alt="tantuni" 
            onClick={() => setSelectedImg(img) }  /> ))}
        </div>
      </div>
    </div>
  </>;
};

export default App;
