import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { ArrayActions } from '../../store/Reduxx';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  console.log("nn0",props.item)
  const dispatch=useDispatch();


  const Increase =()=>{
 dispatch(ArrayActions.addItems({
  title, quantity, total, price,id

 }))
  }
  const decrease=()=>{
    dispatch(ArrayActions.removeItems(id))

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrease}>-</button>
          <button onClick={Increase}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
