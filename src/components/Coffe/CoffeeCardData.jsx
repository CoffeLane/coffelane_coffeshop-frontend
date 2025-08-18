import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { h1, h4, h7, } from "../../styles/typographyStyles.jsx";
import { btnCart } from "../../styles/btnStyles.jsx";
import favorite from "../../assets/icons/favorite.svg";
import favoriteActive from "../../assets/icons/favorite-active.svg";
import shopping from "../../assets/icons/shopping.svg"



export default function CoffeeCardData({ products }) {
    const [isfavorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    if (!products || products.length === 0) {
    return (
        <Typography sx={{ ...h1, mb: 1 }}>
            No products found
        </Typography>
    );
}

    return (
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", }}>

            {products.map((item) => (
                <Card key={item.id} sx={{ width: "300px", height: "480px", display: "flex", padding: "16px", flexDirection: "column", borderRadius: "24px", boxShadow: 2, }}>
                    <Box sx={{ position: "relative", width: "252px", height: "256px", mx: "auto", p: 1 }}>
                        <CardMedia component="img" image={item.image} alt={item.title} sx={{ width: "100%", height: "100%" }} />
                        <Box component="img" src={isfavorites[item.id] ? favoriteActive : favorite} alt="favorite" sx={{ position: "absolute", top: 16, right: 16, width: "32px", height: "32px", cursor: "pointer" }} onClick={() => toggleFavorite(item.id)} />
                    </Box>
                    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <Box sx={{ height: 88, overflow: "hidden" }}>
                            <Typography sx={{ ...h4, mb: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ ...h7, mb: 1 }}>
                                {item.description}
                            </Typography>
                        </Box>
                        <Typography sx={{ mt: 1, color: '#16675C', fontSize: '14px', fontWeight: 700, fontFamily: "Montserrat, sans-serif", textAlign: "right", mb: 1 }}>
                            {item.price}
                        </Typography>
                        <Button variant="contained" sx={{ ...btnCart, flexGrow: 1, mr: 1 }}
                            endIcon={<Box component="img" src={shopping} alt="shopping" sx={{ width: "24px", height: "24px", cursor: "pointer", ml: 1 }} />}>
                            {item.buttonText}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}


