import classes from "./ShapeOne.module.css";

const ShapeOne = ({ item }) => {
  return (
    <div className={classes.shape1}>
      <h4>{item.title}</h4>
      <small>{item.value}</small>
    </div>
  );
};
export default ShapeOne;
