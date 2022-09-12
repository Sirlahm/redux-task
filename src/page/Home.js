import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItem, toggle, deleteItem } from "../redux/action";

import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

import Delete from "../assests/trash.svg";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({});
  

  const toggleSelector = useSelector((state) => state.input.toggle);
  const Items = useSelector((state) => state.input.items);
  const editVal = useSelector((state) => state.input.editValue);
  const editMode = useSelector((state) => state.input.editMode);

  const onInputHandler = (id, val) => {
    setFields({
      ...fields,
      [id]: val,
    });
  };
  const handleDispatch = () => {
    dispatch(addItem(fields, editVal.id));
    dispatch(toggle());
    setFields(null);
  };

  return (
    <div>
      <div className="counter">
        <div className="counter-field">{`TASKS ${Items.length}`}</div>
        <button
          onClick={() => {
            dispatch(toggle());
          }}
          className="counter-btn"
        >
          +
        </button>
      </div>

      {Items.map((item, index) => (
        <Card key={index} item={item} />
      ))}

      {toggleSelector && (
        <div className="form">
          <Input
            id="description"
            placehoder="Follow Up"
            label="Task Description"
            onInput={onInputHandler}
            value={editVal.description}
          />
          <div className="TD">
            <div className="TD-input">
              <Input
                id="date"
                label="Date"
                type="date"
                onInput={onInputHandler}
                value={editVal.date}
              />{" "}
            </div>
            <div className="TD-input">
              <Input
                id="time"
                label="Time"
                type="time"
                onInput={onInputHandler}
                value={editVal.time}
              />
            </div>
          </div>
          <div className="bottom">
            {editMode && (
              <div className="p" onClick={() => dispatch(deleteItem(editVal))}>
                <img src={Delete} alt="Trash" />
              </div>
            )}
            <div className="btns">
              <Button onClick={() => dispatch(toggle())} cancel>
                Cancel
              </Button>

              <Button onClick={handleDispatch}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
