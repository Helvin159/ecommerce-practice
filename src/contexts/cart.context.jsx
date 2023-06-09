import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? {
						...cartItem,
						quantity: cartItem.quantity + 1,
						cartTotal: (cartItem.quantity + 1) * cartItem.price,
				  }
				: cartItem
		);
	}

	return [
		...cartItems,
		{
			...productToAdd,
			quantity: 1,
			cartTotal: productToAdd.price,
		},
	];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? {
					...cartItem,
					quantity: cartItem.quantity - 1,
					cartTotal: cartItem.cartTotal - cartItem.price,
			  }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToClear.id
	);

	if (existingCartItem) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);

		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.cartTotal,
			0
		);
		setCartCount(newCartCount);
		setCartTotal(newCartTotal);
	}, [cartItems]);
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartItems,
		cartCount,
		cartTotal,
		setCartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
