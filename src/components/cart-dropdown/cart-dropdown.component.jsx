import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			{cartItems.length ? (
				<CartItems>
					{cartItems.map((item) => (
						<CartItem cartItem={item} key={item.id} />
					))}
				</CartItems>
			) : (
				<EmptyMessage>No items in cart</EmptyMessage>
			)}

			<Button
				buttonType={BUTTON_TYPE_CLASSES.base}
				onClick={goToCheckoutHandler}>
				CHECKOUT
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
