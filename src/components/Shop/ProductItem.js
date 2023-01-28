import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { ArrayActions } from '../../store/Reduxx';
import { useDispatch,useSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch=useDispatch();
  // const cart=useSelector(state=>state.show)


  const ADDINGDATA=()=>{
    


    dispatch(ArrayActions.addItems({
      id,
     
      price,
       title,

    }))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={ADDINGDATA}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
