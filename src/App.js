import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { CartActions } from './store/Reduxx'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notifications';

import { fetchCartData } from './store/GetData';

import { uiActions } from './store/Ui-slice';
let inital=true;


function App() {
  const dispatch=useDispatch();
  const isTrue=useSelector(state=>state.show.cart) 
  console.log(isTrue);

  const cart=useSelector(state=>state.cartitems);
  console.log("FFF",cart)
  const notification=useSelector(state=>state.ui.Notification)
  useEffect(()=>{
    console.log("fetching data")
    dispatch(fetchCartData());

  },[dispatch])
 

  useEffect(()=>{
    async function GETDATA(){
      dispatch(uiActions.NotificationDisplay({
        status:"pending",
        title:"sending...",
        message:"SEnding cart data"
      }))
      let res=await fetch('https://demo1-5f743-default-rtdb.firebaseio.com/cart.json',{
      method:"PUT",
      body:JSON.stringify(cart)

    });

    if(!res.ok){
    
      throw new Error("Something went wrong");
    }
    const resdata=await res.json();
     dispatch(uiActions.NotificationDisplay({
        status:"Success",
        title:"Success...",
        message:"SEnding cart data SuccessFully"
      }))


    }
    if(inital){
      inital=false;
      return;
    }
    GETDATA().catch(err=>{
         dispatch(uiActions.NotificationDisplay({
        status:"error",
        title:"Error !...",
        message:"SEnding cart data Failed"
      }))
    })
   
  },[cart,dispatch]);


  return (
    <Layout>
    {notification && <Notification 
    status={notification.status} 
    title={notification.title}
     message={notification.message}/>}
     {isTrue &&  <Cart />}

      <Products />
    </Layout>
  );
}

export default App;
