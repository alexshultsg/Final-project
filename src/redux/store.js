import { configureStore} from "@reduxjs/toolkit";
import bikes from './BikeSlice';
import cartReducers, { getTotal } from "./cartSlice";
import uiReducer from "./ui-slice";




export const store = configureStore({
    reducer:{
        bikes ,
        cart:cartReducers,
        ui: uiReducer
          
    }
})
store.dispatch(getTotal())


