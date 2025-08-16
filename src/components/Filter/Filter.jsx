import React, { useState } from "react";
import { Box, Typography, FormControl, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Slider } from "@mui/material";
import { h3, h4, h6 } from "../../styles/typographyStyles.jsx";
import { inputDropdown } from "../../styles/inputStyles.jsx";
import { selectMenuProps } from '../../styles/inputStyles.jsx';
import { checkboxStyles } from '../../styles/inputStyles.jsx';


export default function Filter() {
    const [sort, setSort] = useState("lowToHigh");
    const [brand, setBrand] = useState("Brand");
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: '16px', boxShadow: 2, height:'100%'}}>
            <Typography sx={{ ...h3, mb: 1 }}>
                Sort By
            </Typography>
            <FormControl fullWidth sx={{ ...h6, ...inputDropdown, my: 1, mb: 3 }}>
                <Select value={sort} onChange={(e) => setSort(e.target.value)} >
                    <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
                    <MenuItem value="highToLow">Price: High to Low</MenuItem>
                </Select>
            </FormControl>

            <Typography sx={{ ...h3, mt: 4 }}>
                Filter By
            </Typography>
            <FormControl fullWidth sx={{ ...h6, ...inputDropdown, my: 1, mb: 3 }}>
                <Select value={brand} onChange={(e) => setBrand(e.target.value)} MenuProps={selectMenuProps}>
                    <MenuItem value="Brand">Brand</MenuItem>
                    <MenuItem value="brand1">Brand 1</MenuItem>
                    <MenuItem value="brand2">Brand 2</MenuItem>
                </Select>
            </FormControl>

            <Typography sx={{ ...h4, margin: '32px 0 8px 0' }}>
                Grind type
            </Typography>
            <FormGroup sx={{ mb: 1 }}>
                {["Soluble", "Ground", "In grains", "In capsules"].map((item) => (
                    <FormControlLabel sx={{ ...h6, ...checkboxStyles }} key={item} control={<Checkbox />} label={item} />
                ))}
            </FormGroup>

            <Typography sx={{ ...h4, margin: '32px 0 8px 0' }}>
                Roast Level
            </Typography>
            <FormGroup>
                {["Light Roast", "Medium Roast", "Dark Roast"].map((item) => (
                    <FormControlLabel sx={{ ...h6, ...checkboxStyles }} key={item} control={<Checkbox />} label={item} />
                ))}
            </FormGroup>

            <Typography sx={{ ...h4, margin: '32px 0 8px 0' }}>
                Caffeine Content
            </Typography>
            <FormGroup>
                {["Regular", "Decaf"].map((item) => (
                    <FormControlLabel sx={{ ...h6, ...checkboxStyles }} key={item} control={<Checkbox />} label={item} />
                ))}
            </FormGroup>

            <Typography sx={{ ...h4, margin: '32px 0 8px 0' }}>
                Coffee Bean Type
            </Typography>
            <FormGroup>
                {["100% Arabica", "100% Robusta", "Arabica/Robusta Blend"].map((item) => (
                    <FormControlLabel sx={{ ...h6, ...checkboxStyles }} key={item} control={<Checkbox />} label={item} />
                ))}
            </FormGroup>

            <Typography sx={{ ...h3, margin: '32px 0 ' }}>
                Price range
            </Typography>
            <Slider value={priceRange} onChange={handlePriceChange} valueLabelDisplay="auto" min={0} max={1000} sx={{ color: "#A4795B" }} />
            <Box display="flex" justifyContent="space-between">
                <Typography sx={{ ...h6, }}>${priceRange[0]}</Typography>
                <Typography sx={{ ...h6, }}>${priceRange[1]}</Typography>
            </Box>
        </Box>
    );
}
