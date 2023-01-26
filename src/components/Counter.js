import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { Actions } from '../Store/Redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.count)
  const show=useSelector(state=>state.counter.show);
  const toggleCounterHandler = () => {
    dispatch(Actions.toggleCounter())
    
  };

  const incrementhandler=()=>{
    dispatch(Actions.increment())

  }
  const decrementHandler=()=>{
    dispatch(Actions.decrement())

  }
  const increase=()=>{
    dispatch(Actions.increase(2))

  }
  const decrease=()=>{
    dispatch(Actions.decrease({value:2}));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <><div className={classes.value}>{counter}</div>
      <div> 
      <button onClick={incrementhandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
       <button onClick={increase}> +2 </button>
        <button onClick={decrease}> -2 </button>
      </div>
       </>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
