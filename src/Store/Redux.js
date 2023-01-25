import  { legacy_createStore as createStore}  from "redux";

const CounterReducer=(state={count:0},action)=>{
    if(action.type==='incr'){
        return{
            count:state.count+action.value
        }
    }
     if(action.type==='decr'){
        return{
            count:state.count-action.value
        }
    }
    return state;

}


const store=createStore(CounterReducer)
export default store;