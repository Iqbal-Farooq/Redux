
import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";



const initialThemeState={

  
  cart:false,
  

}
const CartSLice = createSlice({
  name:'theme',
  initialState:initialThemeState,
  reducers:{
  
    cartstate(state,action){
        state.cart=!state.cart;
    }

  
  }
})

const store = configureStore({
  reducer: {
    show:CartSLice.reducer,

      
     },
});


export const cartActions=CartSLice.actions;
export default store;