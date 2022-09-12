import React from "react";

import Edit from "../assests/pencil.svg";
import "./Card.css";

import { useDispatch } from "react-redux";
import { editMode } from "../redux/action";

const Card = (props) => {
  const dispatch = useDispatch();

  const { item } = props;

  return (
    <div className="card">
      <div>
        <p className="desp">{item.description}</p>
        <p className="date">{item.date}</p>
      </div>
      <button onClick={() => dispatch(editMode(item))}>
        <img src={Edit} alt="Editing" />
      </button>
    </div>
  );
};

export default Card;
