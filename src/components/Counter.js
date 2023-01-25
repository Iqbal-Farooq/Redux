import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.count)
  const toggleCounterHandler = () => {};

  const incrementhandler=()=>{
    dispatch({type:"incr",value:5})

  }
  const decrementHandler=()=>{
    dispatch({type:"decr",value:5})

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div> 
      <button onClick={incrementhandler}>Incrementby +5</button>
      <button onClick={decrementHandler}>Decrementby -5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
