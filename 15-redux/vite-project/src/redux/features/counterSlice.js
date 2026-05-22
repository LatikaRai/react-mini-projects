import { createSlice } from "@reduxjs/toolkit";
 
export const counterSlice = createSlice({
    // good practice to mention the slice name
    name: 'counter',

    // first have to initialize the value
    initialState: {
        value: 0
    },

    // reducers are the function
    reducers: {
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },

        incrementByAmount: (state,actions)=>{
            state.value += actions.payload
        },
    }
})

// now export 2 things
export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer