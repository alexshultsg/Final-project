import { createSlice } from '@reduxjs/toolkit'

export const BikesSlice = createSlice({
    name:"bikes",
    initialState:{
        selectedCategory : "Single Speed"
    },
    reducers:{
       filterCategory:( state, action ) => { 
        state.selectedCategory = action.payload;
       }
    }
})
export const getSelectedCategory = state => state.bikes.selectedCategory;
export const {filterCategory} = BikesSlice.actions;
export default BikesSlice.reducer;