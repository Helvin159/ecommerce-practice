import {
	CartItemContainer,
	ItemDetails,
	Name,
	Img,
	Price,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CartItemContainer>
			<Img src={imageUrl} alt={name} />
			<ItemDetails>
				<Name>{name}</Name>
				<Price>
					{quantity} * ${price}
				</Price>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
