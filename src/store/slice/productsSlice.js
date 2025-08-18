import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../api/axios';
import products from '../../mockData/products.jsx';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async ({ page = 1, limit = 9 } = {}, thunkAPI) => {
//     try {
//       const response = await api.get(`/products?page=${page}&limit=${limit}`);
//       console.log('API response:', response.data);
//       // ожидаем, что сервер возвращает { data: [...], totalItems: 100 }
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || 'Error');
//     }
//   }
// );



// thunk для пагинации на моках
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page = 1, limit = 9 } = {}, thunkAPI) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const currentItems = products.slice(startIndex, endIndex);

    return {
      data: currentItems,
      totalItems: products.length,
    };
  }
);



const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    totalItems: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
