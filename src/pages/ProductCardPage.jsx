import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice.jsx";

import ProductAccordion from "../components/ProductCard/ProductAccordion.jsx";
import ProductImageSlider from "../components/ProductCard/ProductImageSlider.jsx";
import ProductInfo from "../components/ProductCard/ProductInfo.jsx";
import AddToCartButtons from "../components/ProductCard/AddToCartButtons.jsx";
import RecommendedProducts from "../components/ProductCard/RecommendedProducts.jsx";
import { fetchProducts } from '../store/slice/productsSlice.jsx';


export default function ProductCardPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.products);

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (!loading && items.length > 0) {
            const found = items.find(p => p.id === parseInt(id));
            if (found) {
                setProduct(found);
                setQuantity(1);
            } else {
                setProduct(null);
            }
        }
    }, [id, items, loading]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    const recommended = items.filter(p => p.id !== product.id).slice(0, 3);

    console.log(product);

    return (

        <Box sx={{ width: '100%' }}>
            <Grid container sx={{ px: 4, py: 4, display: 'flex', justifyContent: 'space-evenly', gap: 3, mt: 4 }}>
                <Box sx={{}}>
                    <ProductImageSlider photos={product.photos_url} productName={product.name} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, maxWidth: 600, }}>
                    <ProductInfo key={product.id}    product={product} quantity={quantity} onIncrement={() => setQuantity(q => q + 1)} onDecrement={() => setQuantity(q => Math.max(1, q - 1))} />
                    <AddToCartButtons key={`cart-${product.id}`} product={product} quantity={quantity} />
                </Box>
            </Grid>
            <Box sx={{ px: 4, py: 4, }}>
                <ProductAccordion product={product} />
            </Box>
            <Box sx={{ px: 4, py: 4, }}>
                <RecommendedProducts products={recommended} />
            </Box>
        </Box>
    );
};

