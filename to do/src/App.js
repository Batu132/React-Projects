import React, { useState } from "react";
import "./index.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("enter an item");
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  };

  const targetFunc = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="taskInput">
            <h1>Todo App</h1>
            <input
              type="text"
              placeholder="add an item"
              value={newItem}
              onChange={targetFunc}
            />
            <button onClick={addItem}>Add</button>
            <ul>
              {items.map((item) => {
                return <li key={item.id}>{item.value}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
