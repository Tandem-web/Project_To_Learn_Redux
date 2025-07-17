// features/Store/slices/product-slice.ts
import { createSlice } from '@reduxjs/toolkit'
import { ProductApi as Product } from '../model/types'

interface ProductState {
  favorites: Record<Product['id'], boolean>
}
const initialState: ProductState = {
  favorites: {},
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload
      state.favorites[id] = !state.favorites[id]
    },
  }
})
export const { toggleFavorite } = productSlice.actions
export default productSlice.reducer