import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import CoffeeCardData from '../components/Coffe/CoffeeCardData.jsx'
import { h5 } from "../styles/typographyStyles.jsx";
import { Box, Typography, CircularProgress } from '@mui/material';
import Filter from '../components/Filter/Filter.jsx'
import PaginationControl from "../components/PaginationControl/PaginationControl.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slice/productsSlice.jsx';
import { useNavigate } from "react-router-dom";



const itemsPerPage = 12;

export default function CatalogCoffeePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalItems, loading, error } = useSelector((state) => state.products);

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit: itemsPerPage }));
  }, [dispatch, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    navigate(`?page=${value}`);
  };

  if (error) return <p>Error: {error}</p>;

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
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <CoffeeCardData products={items} />
        )}
        <PaginationControl page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </Grid>
    </Grid>
  );
}
