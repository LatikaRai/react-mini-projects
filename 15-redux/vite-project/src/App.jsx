import React, { useState } from 'react'
import {increment,decrement,incrementByAmount} from './redux/features/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  // use redux hooks
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  const [num, setNum] = useState(0)

  return (
    <div>

      <h1>{count}</h1>

      <button
        onClick={()=>dispatch(increment())}
      >Increment</button>

      <button
        onClick={()=>dispatch(decrement())}
      >Decrement</button>

      <input type="number"
      placeholder='0'
      onChange={(e)=>{
        setNum(e.target.value)
      }} 
      />

      <button 
        onClick={()=>dispatch(incrementByAmount(Number(num)))}
      >Increased by Amount</button>

    </div>
  )
}

export default App
