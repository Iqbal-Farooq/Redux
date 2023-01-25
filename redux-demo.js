const redux=require('redux');

const reducer=(state={counter:0},action)=>{
    if(action.type==='add'){
         return{
        counter:state.counter+1
    }}
    else if(action.type==='dec') {
          return{
        counter:state.counter-1
    }
    }


    }
   
         
  
  



const store=redux.legacy_createStore(reducer);
// console.log(store.getState());

const subscriber=()=>{
  const latest=  store.getState();
  console.log(latest)
}
store.subscribe(subscriber);
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"dec"})

