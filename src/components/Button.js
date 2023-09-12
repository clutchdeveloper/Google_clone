"use client";
import React from "react";

function Button({ style, click, text }) {
  return (
    <button onClick={click} className={`btn ${style}`}>
      {text}
    </button>
  );
}

export default Button;
