import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.map((item) => (
					<CartItem cartItem={item} key={item.id} />
				))}
			</CartItems>

			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
