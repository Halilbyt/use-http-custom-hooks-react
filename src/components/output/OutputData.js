import React, { memo } from "react";
import classes from "./OutputData.module.css";
import Tasks from "./Tasks";
const OutputData = (props) => {
  return (
    <ul className={classes.outputArea}>
      {props.showData !== 0 && props.errorMessage.length === 0 ? (
        <Tasks data={props.data} />
      ) : (
        "There is no task"
      )}
      {props.errorMessage && <div>Error {props.errorMessage}</div>}
    </ul>
  );
};

export default memo(OutputData);
