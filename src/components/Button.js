import React from "react";

import "../page/Home.css";

const Button = ({ children, onClick, cancel }) => {
  return (
    <button className={`btn ${cancel? "btn-cancel" : " " }`} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
