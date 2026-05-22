import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"

export const store = configureStore({
    reducer:{
        // import the reducer from another file
        counter:counterReducer
    }
})