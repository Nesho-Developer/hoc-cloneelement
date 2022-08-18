import React from "react";
const withSearch = (Component, products) => {
  return class extends React.Component {
    state = {
      searchTerm: "",
    };

    onSearchHandler = (event) => {
      console.log(event.target.value);
      this.setState({ searchTerm: event.target.value });
    };
    render() {
      console.log(this.products);
      let { searchTerm } = this.state;
      console.log(this.products);
      const filteredProducts = filterProducts(searchTerm, products);
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "50%", margin: "auto" }}>
            <input value={searchTerm} onChange={this.onSearchHandler} />
            <Component products={filteredProducts} />
          </div>
        </div>
      );
    }
  };
};
const filterProducts = (searchTerm, products) => {
  searchTerm = searchTerm.toUpperCase();
  return products.filter((product) => {
    let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  });
};

export default withSearch;
