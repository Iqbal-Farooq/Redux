import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false,Notification:null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    NotificationDisplay(state,action){
        state.Notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message,
        }

    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;