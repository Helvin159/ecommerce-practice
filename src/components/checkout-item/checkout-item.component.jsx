import { useContext } from 'react';
import {
	CheckoutItemContainer,
	ImageContainer,
	Image,
	Name,
	Quantity,
	Arrow,
	Value,
	Price,
	RemoveButton,
} from './checkout-item.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { id, name, price, quantity, imageUrl } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer data-id={id}>
				<Image src={imageUrl} alt={name} />
			</ImageContainer>
			<Name>
				<h5>{name}</h5>
			</Name>

			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
