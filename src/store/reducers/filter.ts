import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  search?: string
  showFavorites: boolean
}

const initialState: FilterState = {
  search: '',
  showFavorites: false
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    toggleFavorites: (state) => {
      state.showFavorites = !state.showFavorites
    }
  }
})

export const { changeSearch, toggleFavorites } = filterSlice.actions
export default filterSlice.reducer
