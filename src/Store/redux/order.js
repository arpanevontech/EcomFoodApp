import {createSlice} from '@reduxjs/toolkit';

const orderCart = createSlice({
  name: 'order',
  initialState: {
    ids: [],
    idsOrderCart: [],
    cartItemsCount: [],
    //hashmap()
    //map() --JS
    
  },

  
  reducers: {
    addOrder: (state, action) => {
      state.ids.push(action.payload.id);
    },

    removeOrder: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
    addCart: (state, action) => {
      state.idsOrderCart.push(action.payload.id);
    },

    removeCart: (state, action) => {
      state.idsOrderCart.splice(state.idsOrderCart.indexOf(action.payload.id), 1);
    },

    incQuantity: (state , action) =>{
    
 
      state.ids.push(action.payload.id);

    },

    decQuantity: (state , action) =>{

      state.cartItemsCount.splice(state.cartItemsCount.indexOf(action.payload.id), 1);


      }

   
  },
});

export const addOrder = orderCart.actions.addOrder;
export const removeOrder = orderCart.actions.removeOrder;
export const addCart = orderCart.actions.addCart;
export const removeCart = orderCart.actions.removeCart;
export const incQuantity = orderCart.actions.incQuantity;
export const decQuantity = orderCart.actions.decQuantity;
export default orderCart.reducer;
