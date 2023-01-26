
import {createSlice
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0,show:true,},
    reducers:{

        increment(state){
            state.count++;

        },
        decrement(state){
            state.count--;

        },
        toggleCounter(state){
            state.show=!state.show;
        },
        increase(state,action){
           state.count= state.count + action.payload;
        },
        decrease(state,action){
            console.log(action.payload.value)
            state.count=state.count-action.payload.value;
        }


    }
    })
    const initialAuthstate={
        isAuthnticated:false,
    }
  const AuthSlice=  createSlice({
        name:"Authentication",
        initialState:initialAuthstate,
        reducers:{
            login(state){
                state.isAuthnticated=true
            },
            logout(state){
                state.isAuthnticated=false

            }
        }

    })

    const store=configureStore({
        reducer:{counter:counterSlice.reducer,auth:AuthSlice.reducer}

    })

    export const Actions=counterSlice.actions;
    export const AuthActions=AuthSlice.actions;
    export default store;

