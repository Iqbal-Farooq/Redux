import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const CartItems=useSelector(state=>state.cartitems.items)
  console.log("SHOWING CART DATA")
  console.log(CartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
         {CartItems.map((data)=>(<CartItem  item={{id:data.id, title: data.title, quantity: data.quantity,  price: data.price,total:data.total }}   />))}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
