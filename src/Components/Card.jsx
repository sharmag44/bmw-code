import React from "react";
import "../styles.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="card" style={{ width: "18rem" }}></div>
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
        aria-hidden
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
