import React from "react";
import Header from "./Components/Header";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./Components/Image";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Image />
    </div>
  );
}
