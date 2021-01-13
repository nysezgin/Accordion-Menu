import "./reset.css";
import "./App.css";
import React from "react";
import Questions from "./Faq";
import Logo from "./Logo";

function App() {
  return (
    <div className="faq-container">
      <Logo />
      <Questions />
    </div>
  );
}

export default App;
