import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
	if (product === (null || undefined)) return;

	const { name, price, imageUrl } = product;
	console.log(product);

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted'>Add to cart</Button>
		</div>
	);
};

export default ProductCard;
