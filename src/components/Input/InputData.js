import React, { memo, useState } from "react";
import classes from "./InputData.module.css";
const InputData = (props) => {
  const [inputData, setInputData] = useState("");

  const addDataToDatabase = async (task) => {
    const response = await fetch(
      "https://dummydatabasereact-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.json();
  };

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const addInputDatabase = (e) => {
    e.preventDefault();
    if (inputData.length > 0) {
      addDataToDatabase(inputData);
      props.onClickEvent();
    } else {
      alert("Please Add Taks First ! ");
    }
    setInputData("");
  };

  return (
    <form className={classes.inputTaskArea}>
      <input
        className={classes.inputText}
        type="text"
        onChange={inputOnChangeHandler}
        value={inputData}
        required
      />
      <button type="submit" className={classes.btn} onClick={addInputDatabase}>
        Add Task
      </button>
    </form>
  );
};

export default memo(InputData);
