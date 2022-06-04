export const Product = ({ product }) => {
	
  return (
	<div className="product">
	  <div className="product__image">
		<img src={product.image} alt={product.name} />
	  </div>
	  <div className="product__info">
		<p>{product.name}</p>
		<p className="product__price">
		  <small>$</small>
		  <strong>{product.price}</strong>
		</p>
		<p>{product.description}</p>
	  </div>
	</div>
  );
}