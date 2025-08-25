import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { h3, h6 } from "../../styles/typographyStyles.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import WeightSelector from "./WeightSelector.jsx";




export default function ProductInfo({ product, quantity, onIncrement, onDecrement }) {

    const [selectedSupply, setSelectedSupply] = useState(product?.supplies?.[0] || null);
    const price = selectedSupply ? Number(selectedSupply.price) : Number(product.price);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, maxWidth: 700 }}>
            <Box>
                <Typography sx={{ ...h3, mb: 2 }}>{product.name}</Typography>
                <Typography sx={{ ...h6 }}>{product.description}</Typography>
            </Box>
            <WeightSelector product={product} selectedSupply={selectedSupply} setSelectedSupply={setSelectedSupply} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <QuantitySelector quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
                <Typography sx={{ ...h3, color: '#A4795B', }}>
                    ${(price * quantity).toFixed(2)}
                </Typography>
            </Box>
        </Box>
    );
}
