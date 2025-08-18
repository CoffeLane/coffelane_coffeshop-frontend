import React from 'react'; // Remove useState since you're using context
import {Box, DialogContent, Typography, Button, Divider, IconButton} from '@mui/material';
import {Add, Remove, Delete} from '@mui/icons-material';
import {StyledDialog} from "../UI/StyledDialog.js";
import {StyledButton} from "../UI/StyledButton.js";
import {useCart} from '../../contexts/CartContext';

const CartModal = ({open, onClose}) => {
    console.log('CartModal rendered, open:', open);
    console.log('CartModal props:', {open, onClose});

    const {cartItems, updateQuantity, removeFromCart, getCartTotal} = useCart();
    const subtotal = getCartTotal();
    const discount = 5;
    const total = subtotal - discount;


    return (
        <StyledDialog open={open}
                      modalIsOpen={open}
                      onClose={onClose}
                      maxWidth="sm"
                      fullWidth
                      >
        <DialogContent sx={{padding: '56px', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            {/* Cart Header */}
            <Box sx={{borderBottom: 1, borderColor: '#E0E0E0', padding: '0 0 16px 0'}}>
                <Typography variant="h4" sx={{fontWeight: 600, color: '#3E3027'}}>
                    Shopping cart
                </Typography>
            </Box>

            {/* Cart Content */}
            <Box sx={{flex: 1, overflow: 'auto', py: 2}}>
                {cartItems.length === 0 ? (
                    <EmptyCart/>
                ) : (
                    <PopulatedCart
                        cartItems={cartItems}
                        updateQuantity={updateQuantity}
                        removeItem={removeFromCart}
                    />
                )}
            </Box>

            {/* Cart Footer - Only show when items exist */}
            {cartItems.length > 0 && (
                <Box sx={{borderTop: 1, borderColor: '#E0E0E0', pt: 2}}>
                    <OrderSummary subtotal={subtotal} discount={discount} total={total}/>
                    <StyledButton
                        fullWidth
                        variant="contained"
                        sx={{mt: 2}}
                    >
                        PLACE AN ORDER
                    </StyledButton>
                </Box>
            )}
        </DialogContent>
</StyledDialog>
)
    ;
};

// Empty Cart Component
const EmptyCart = () => (
    <Box sx={{textAlign: 'center', py: 8}}>
        {/* Coffee mug illustration */}
        <Box sx={{mb: 4, fontSize: '80px'}}>
            ☕
        </Box>
        <Typography variant="h5" sx={{color: '#3E3027', fontWeight: 600, mb: 2}}>
            Oops! Your cart is still empty.
        </Typography>
        <Typography variant="body1" sx={{color: '#666'}}>
            But our coffee is already waiting — take a look at the catalog!
        </Typography>
    </Box>
);

// Populated Cart Component  
const PopulatedCart = ({cartItems, updateQuantity, removeItem}) => (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        {cartItems.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
            />
        ))}
    </Box>
);

// Individual Cart Item Component
const CartItem = ({item, updateQuantity, removeItem}) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        border: '1px solid #E0E0E0',
        borderRadius: '8px'
    }}>
        {/* Product Image */}
        <Box sx={{width: '60px', height: '60px', bgcolor: '#f5f5f5', borderRadius: '4px'}}>
            {/* Replace with actual image */}
            <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                ☕
            </Box>
        </Box>

        {/* Product Details */}
        <Box sx={{flex: 1}}>
            <Typography variant="body2" sx={{color: '#666'}}>{item.type}</Typography>
            <Typography variant="body1" sx={{fontWeight: 600, color: '#3E3027'}}>{item.name}</Typography>
            <Typography variant="body2" sx={{color: '#666'}}>{item.edition}</Typography>
        </Box>

        {/* Quantity Controls */}
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <IconButton
                size="small"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                sx={{color: '#A4795B'}}
            >
                <Remove/>
            </IconButton>
            <Typography sx={{minWidth: '30px', textAlign: 'center'}}>{item.quantity}</Typography>
            <IconButton
                size="small"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                sx={{color: '#A4795B'}}
            >
                <Add/>
            </IconButton>
        </Box>

        {/* Price */}
        <Typography variant="body1" sx={{fontWeight: 600, minWidth: '60px', textAlign: 'right'}}>
            ${item.price}
        </Typography>

        {/* Delete Button */}
        <IconButton
            onClick={() => removeItem(item.id)}
            sx={{color: '#FF2F2F'}}
        >
            <Delete/>
        </IconButton>
    </Box>
);

// Order Summary Component
const OrderSummary = ({subtotal, discount, total}) => (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body1">Subtotal:</Typography>
            <Typography variant="body1">${subtotal}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body1">Discount:</Typography>
            <Typography variant="body1" sx={{color: '#FF2F2F'}}>-${discount}</Typography>
        </Box>
        <Divider sx={{my: 1}}/>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h6" sx={{fontWeight: 600}}>Total:</Typography>
            <Typography variant="h6" sx={{fontWeight: 600}}>${total}</Typography>
        </Box>
    </Box>
);

export default CartModal;