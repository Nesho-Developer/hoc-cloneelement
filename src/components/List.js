import React from "react";
import classes from "./List.module.css";
const List = ({ children, items }) => {
  console.log(items, children);
  const x = items.map((item) =>
    React.cloneElement(children, {
      item: item,
      key: item.title,
    })
  );
  console.log(x);
  return <div className={classes.list}>{x}</div>;
};
export default List;
