import React from "react";
import { Box, Typography } from "@mui/material";
import { h5, h6 } from "../../styles/typographyStyles.jsx";

export default function WeightSelector({ product, selectedSupply, setSelectedSupply }) {

  if (!product?.supplies || product.supplies.length === 0) return null;

  return (
    <Box sx={{mt: 2}}>
      <Typography sx={{ ...h5, mb: 1 }}>Total weight:</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mb: 2 }}>
        {product.supplies.map((supply) => (
          <Typography key={supply.id} sx={{ ...h6, border: selectedSupply?.id === supply.id ? '3px solid #3E3027' : '1px solid #3E3027', borderRadius: '8px', p: 1, cursor: 'pointer', }} onClick={() => setSelectedSupply(supply)}>
            {supply.weight}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

