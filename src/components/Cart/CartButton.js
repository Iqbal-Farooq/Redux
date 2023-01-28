import classes from './CartButton.module.css';

import { cartActions } from '../../store/Reduxx';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const CartButton = (props) => {
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.cartitems.quantity)
  const CARTSTATE=()=>{
    dispatch(cartActions.cartstate());
  }

  return (
    <button onClick={CARTSTATE} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
