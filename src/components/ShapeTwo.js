import classes from "./ShapeTwo.module.css";

const ShapeTwo = ({ item }) => {
  return (
    <div className={classes.shape2}>
      <h3>{item.title}</h3>
      <small>{item.value}</small>
    </div>
  );
};
export default ShapeTwo;
