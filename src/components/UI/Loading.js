import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes["loading-spinner"]}></div>
    </div>
  );
};

export default Loading;
