import React, { memo } from "react";
import classes from "./SectionArea.module.css";

const SectionArea = (props) => {
  return <Section>{props.children}</Section>;
};

export default memo(SectionArea);
