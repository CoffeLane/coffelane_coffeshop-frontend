import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import CoffeeCardData from '../components/Coffe/CoffeeCardData.jsx'
import { h5 } from "../styles/typographyStyles.jsx";
import { Box, Typography, } from '@mui/material';
import Filter from '../components/Filter/Filter.jsx'
import PaginationControl from "../components/PaginationControl/PaginationControl.jsx";



export default function CoffeePage() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
    // подгрузка данных 
  };


  return (
    <Grid container sx={{ px: 4, py: 4 }}>
      <Grid size={3} sx={{ mb: 9 }}>
        <Filter />
      </Grid>
      <Grid size={9} sx={{ pl: 4 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "#3E3027", fontFamily: "Kefa", fontWeight: 400, fontSize: '40px', mb: 1, }}>
            Your Coffee Corner
          </Typography>
          <Typography sx={{ ...h5, mb: 4, }}>
            Instant, ground, or beans — all the essentials in one place.
          </Typography>
        </Box>
        <CoffeeCardData />
        <PaginationControl page={page} totalPages={totalPages} onChange={handlePageChange} />
      </Grid>
    </Grid>
  );
}
