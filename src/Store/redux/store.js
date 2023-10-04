import {configureStore} from '@reduxjs/toolkit';
import orderReducer from './order'


export const store =  configureStore({

    reducer:{
        orderCarts:orderReducer
    }

});