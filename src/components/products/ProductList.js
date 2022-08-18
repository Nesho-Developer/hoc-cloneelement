import ProductCard from "./ProductCard";

const ProductList = ({products}) => {

  return (
    <>
      <h2>Products List:</h2>
      <ul>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
};
export default ProductList;
