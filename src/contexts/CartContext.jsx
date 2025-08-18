import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([
        // Sample data for testing
        {
            id: 1,
            name: "Jacobs Barista",
            type: "Instant coffee",
            edition: "Editions Americano",
            price: 10.5,
            quantity: 2,
            image: "path/to/jacobs-image.jpg"
        },
        {
            id: 2,
            name: "Lavazza ORO",
            type: "Instant coffee",
            edition: "Editions Americano",
            price: 12.5,
            quantity: 1,
            image: "path/to/lavazza-image.jpg"
        }
    ]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId ? {...item, quantity} : item
            )
        );
    };

    const getCartTotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getCartTotal,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};