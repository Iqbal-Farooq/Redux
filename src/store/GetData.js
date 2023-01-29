

import { ArrayActions } from "./Reduxx";

export const fetchCartData = ()=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            const response  = await fetch('https://reduxpractice-c0253-default-rtdb.firebaseio.com/cart.json') ;

            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        };
        try{
            const cartData = await fetchData();
            dispatch(
                ArrayActions.replaceCart({
                    items:cartData.items||[],
                    quantity:cartData.quantity,
                })

            )
        }catch(error){
            dispatch(ArrayActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Fetching cart data failed!',
            }))
        }
    }
}