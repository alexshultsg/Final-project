import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"


const cartSlice = createSlice({

    name:"cart",
    initialState:{
        cartItems :localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        cartTotalQuantity: 0,
        cartTotalAmount : 0
    },
    
    reducers:{
        addToCart (state,action){

             const bikeIndex = state.cartItems.findIndex (
                (bike) => bike.id === action.payload.id
                );
                if (bikeIndex >= 0) {
                state.cartItems[bikeIndex].cartQuantity += 1;
                toast.success(`increased ${state.cartItems[bikeIndex].name} cart quantity` , {
                    position:"bottom-left"
                })
                } else {

            const tempBike = { ...action.payload, cartQuantity : 1}
            state.cartItems.push(tempBike);
            toast.success(`${action.payload.name} added to cart`, {
                position:"bottom-left",
            })
        }


        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state,action){
        const nextCartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        toast.error(`${action.payload.name} removed from cart`,{
            position:"bottom-left",
        })
    },
    decreaseCart(state, action ){
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      )
      if(state.cartItems[itemIndex].cartQuantity >1) {
        state.cartItems[itemIndex].cartQuantity -= 1

      } else if (state.cartItems[itemIndex].cartQuantity === 1){
        const  nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    } ,
    clearCart(state,action){
        state.cartItems = [];
    
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    },
    getTotal( state, action ){
       let { total,quantity} = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const {price,cartQuantity} = cartItem;
                const itemTotal = price.toFixed(2) * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total: 0,
                quantity:0,

            }
        )
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total.toFixed(2);
    }
    }
})
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal} = cartSlice.actions;
const cartReducers = cartSlice.reducer;
export default cartReducers;