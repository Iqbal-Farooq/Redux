import classes from './CartButton.module.css';

import { cartActions } from '../../store/Reduxx';
import { useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch=useDispatch();
  
  const CARTSTATE=()=>{
    dispatch(cartActions.cartstate());
  }

  return (
    <button onClick={CARTSTATE} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
