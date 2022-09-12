import React, { useState, useEffect } from "react";

import "./Input.css";

const Input = ({ type, label, onInput, id, placehoder, value }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    onInput(id, input);
  }, [id, input]);

  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        value={input || value || ''}
        type={type ? type : "text"}
        onChange={changeHandler}
        placeholder={placehoder}
      />
    </div>
  );
};

export default Input;
