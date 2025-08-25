import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { btnStyles, btnBorderStyles } from "../../styles/btnStyles.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice.jsx";
import CartModal from "../CartModal/index.jsx";

export default function AddToCartButtons({ product, quantity }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isInCart = !!cartItems[product.id];

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(addToCart({ product, quantity }));
        }
        setIsCartOpen(true);
    };

    const handleCheckout = () => {
        setIsCartOpen(true);
    };

    if (!product) return <Box sx={{ mt: 2 }}>Loading product...</Box>;


    return (
        <>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button
                    onClick={handleAddToCart} sx={{ ... (isInCart ? btnBorderStyles : btnStyles), textTransform: 'none', width: '100%' }}>
                    {isInCart ? "In cart" : "Add to cart"}
                </Button>
                <Button sx={{ ...btnBorderStyles, width: '100%' }} onClick={handleCheckout}>
                    Checkout now
                </Button>
            </Box>

            <CartModal open={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

