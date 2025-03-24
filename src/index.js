import React from "react";
import ReactDOM from "react-dom/client";

const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");

const helpText = "Help text!";

const elements = (
  <div className="name">
    <h1>{helpText}</h1>
    <input
      placeholder={helpText}
      onClick={inputClick}
      onMouseEnter={mouseOver}
    />
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
  </div>
);

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(elements);


