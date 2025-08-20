import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../api/axios';
import products from '../../mockData/products.jsx';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async ({ page = 1, limit = 9 } = {}, thunkAPI) => {
//     try {
//       const response = await api.get(`/products?page=${page}&limit=${limit}`);
//       console.log('API response:', response.data);

//       return {
//         data: response.data.data,
//         totalItems: response.data.total_items,
//         totalPages: response.data.total_pages,
//         currentPage: response.data.current_page,
//         hasNextPage: response.data.next_page,
//         hasPreviousPage: response.data.previous_page,
//       };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || 'Error');
//     }
//   }
// );


// Thunk для работы с моками
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page = 1, limit = 9 } = {}, thunkAPI) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const currentItems = products.slice(startIndex, endIndex);

    return {
      data: currentItems,
      totalItems: products.length,
      totalPages: Math.ceil(products.length / limit),
      currentPage: page,
    };
  }
);



const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
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
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
