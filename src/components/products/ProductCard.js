const ProductCard = ({ product }) => {
  return (
    <li key={product.id}>
      <div className="product">
        <p>
          <b>Title:</b> {product.title}
        </p>
        <p>
          <b>Style:</b> {product.style}
        </p>
        <p>
          <b>Price:</b> {product.price}
        </p>
        <p>
          <b>Description:</b> {product.description}
        </p>
        <p>
          <b>Free shipping:</b> {product.isFreeShipping}
        </p>
        <hr />
      </div>
    </li>
  );
};
export default ProductCard;
