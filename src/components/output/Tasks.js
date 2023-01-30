import React, { memo } from "react";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  return (
    <React.Fragment>
      {props.data.map((data) => {
        return (
          <li key={Math.random() * 1000 + 1} className={classes.tasks}>
            {data}
          </li>
        );
      })}
    </React.Fragment>
  );
};
export default memo(Tasks);
