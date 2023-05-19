import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => {
		addItemToCart(product);
	};

	if (product === (null || undefined)) return;

	const { name, price, imageUrl } = product;

	return (
		<ProductCardContainer tabIndex={0}>
			<img src={imageUrl} alt={name} />
			<Footer>
				<Name tabIndex={0}>{name}</Name>
				<Price tabIndex={0}>${price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
				tabIndex={0}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
