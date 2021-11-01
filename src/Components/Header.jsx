import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="image__logo"
          src="https://images.unsplash.com/photo-1557053964-937650b63311?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="logo"
        />
      </div>
      <h1 className="header__title">Bayerische Motoren Werke AG</h1>
    </div>
  );
}
