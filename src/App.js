import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { CartActions } from './store/Reduxx'
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const dispatch=useDispatch();
  const isTrue=useSelector(state=>state.show.cart) 
  console.log(isTrue)
  return (
    <Layout>
     {isTrue &&  <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
