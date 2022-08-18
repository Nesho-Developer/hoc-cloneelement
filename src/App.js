import React from "react";
import classes from "./app.module.css";
import List from "./components/List";
import ProductList from "./components/products/ProductList";
import withSearch from "./components/products/withSearch";
import ShapeOne from "./components/ShapeOne";
import ShapeTwo from "./components/ShapeTwo";
import products from "./components/products/data.json";
function App() {
  const data = [
    { title: "Ahmed Ali", value: 29 },
    { title: "Osama Ali", value: 22 },
    { title: "Mohamed Ali", value: 28 },
    { title: "Rahma Ali", value: 15 },
  ];
  const ProductsListWithSearch = withSearch(ProductList, products);
  return (
    <React.Fragment>
      <div className={classes.App}>
        <div className={classes.list}>
          <ShapeOne item={{ title: "Ahmed Ali", value: 29 }}></ShapeOne>
        </div>
        <div className={classes.list}>
          <ShapeTwo item={{ title: "Ahmed Ali", value: 29 }}></ShapeTwo>
        </div>

        <br />
        <List items={data}>
          <ShapeOne item={{}} />
        </List>
        <List items={data}>
          <ShapeTwo item={{}} />
        </List>
        <ProductsListWithSearch />
      </div>
    </React.Fragment>
  );
}

export default App;
