
import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import uiSlice from "./Ui-slice";



const CARTSTATE={

  
  cart:false,
  

}
const CartSLice = createSlice({
  name:'cart',
  initialState:CARTSTATE,
  reducers:{
  
    cartstate(state,action){
        state.cart=!state.cart;
    }

  
  }
})


const initialsattae={

  items:[],
 quantity :0,
 

}
const Arrayslice = createSlice({
  name:'adding or removing data',
  initialState:initialsattae,
  reducers:{
    addItems(state,action){
        state.quantity++;
                   const newitem=action.payload;
           const existing= state.items.find(item=>item.id===newitem.id)
           if(!existing){
            state.items.push({
                id:newitem.id,
                price:newitem.price,
                quantity:1,
                title:newitem.title,
                total:newitem.price ,
            })
           }else{
             existing.quantity++;
             existing.total=existing.total + newitem.price ;

            }
     
    },
    removeItems(state,action){
        state.quantity--;
     const id=action.payload;
            const existing= state.items.find(item=>item.id===id)
            if(existing.quantity===1){
                state.items=state.items.filter(item=>item.id !== id);
            }
            else{
                existing.quantity--;
                existing.total=existing.total-existing.price ;

            }
    },
   
  }
})




const store = configureStore({
  reducer: {
    cartitems:Arrayslice.reducer,
    show:CartSLice.reducer,
    ui:uiSlice.reducer,
   
      
     },
});


export const cartActions=CartSLice.actions;
export const ArrayActions=Arrayslice.actions;
export default store;