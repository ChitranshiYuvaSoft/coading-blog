import React from "react";
import "../Button/Button.style.css";
const DetailsBtn = ({onclose, blog}) => {
  return <button id="btn" onClick={() => onclose(blog)}>More Details</button>;
};

export default DetailsBtn;
