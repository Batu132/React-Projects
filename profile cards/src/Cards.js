import React from "react";

const Cards = (props) => {
  const { header, description } = props;

  return (
    <>
      <div className="card">
        <h1>
          <b>{props.header}</b>
        </h1>
        <p className="card-description">{description}</p>
        <button className="card-button">See Details</button>
      </div>
    </>
  );
};

export default Cards;
