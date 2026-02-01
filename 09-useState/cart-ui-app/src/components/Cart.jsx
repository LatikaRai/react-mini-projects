import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Cart = () => {

  const [cartItems, setCartItems] = useState([])
 
  //For items
  const [inputItem, setInputItem] = useState("")
  //For costs
  const [inputCost, setInputCost] = useState("")

  function increasing(id){
    setCartItems(prev=> prev.map(elem => 
      elem.id === id 
      ? {...elem, qty: elem.qty+1} : elem))
  }
  function decreasing(id){
    setCartItems(prev=>prev.map(elem => elem.id === id ? {...elem,qty: elem.qty - 1} : elem))
  }
   
  function onTypedItem(val){
    setInputItem(val)
  }
  function onTypedCost(val){
    setInputCost(val)
  }
  function added(){
     const newItem = {
      id: Date.now(),
      item: inputItem,
      cost: Number(inputCost),
      qty: 0
    }
    const newCartItems = [...cartItems , newItem]
    setCartItems(newCartItems)
  }

  return (
    <div className="h-screen w-full bg-black text-white py-10 px-12">
      <h1 className="text-7xl font-bold">Simple Cart</h1>
      <div className='h-[70vh] w-full flex items-cnter justify-between gap-6'>
        <div className='h-full w-2/3 mt-10 border-2 py-4 px-6 text-xl border-gray-200 flex flex-col items-center rounded-xl'>
          <div className='w-full font-bold flex items-start justify-between'>
            <h1 className='w-2/5 text-center'>Product Name</h1>
            <h1 className='w-1/5 text-center'>Cost</h1>
            <h1 className='w-1/5 text-center'>Quantity</h1>
            <h1 className='w-1/5 text-center'>Total</h1>
            <h1 className='w-1/5 text-center'>Action</h1>
          </div>
          
          {cartItems.map((elem)=>{
            return(
            <div key={elem.id} className='w-full mt-6 flex items-start justify-between'>
            <h1 className='w-2/5 text-center'>{elem.item}</h1>
            <h1 className='w-1/5 text-center'>{elem.cost}</h1>
            <div className='w-1/5 h-10 flex items-center justify-center'>
              <div className='h-full w-24 bg-white flex items-center justify-between rounded-full p-2'>
                <i onClick={()=>increasing(elem.id)} className="ri-add-line text-black"></i>
                <h3 className='text-black'>{elem.qty}</h3>
                <i onClick={()=> decreasing(elem.id)} className="ri-subtract-line text-black"></i>
              </div>
            </div>
            <h1 className='w-1/5 text-xl text-center'>₹{elem.cost * elem.qty}</h1>
            <i className="ri-delete-bin-fill w-1/5 text-center"></i>
          </div>
          )})
          }
        </div>
      <div className='h-full mt-10 w-1/3 px-4'>
        <div className='w-full h-[55%]  rounded-xl border-2 border-gray-200 p-6 flex flex-col gap-4'>
          <h1 className='text-xl font-bold'>Add items</h1>
          <div>
            <h2 className='font-semibold text-lg'>Product Name:</h2>
            <input onChange={(e)=>{onTypedItem(e.target.value)}} className='w-full h-8 bg-[#333333] rounded-sm p-2' type="text" />
          </div>
          <div>
            <h2 className='font-semibold text-lg'>Cost:</h2>
            <input onChange={(e)=>onTypedCost(e.target.value)} className='w-full h-8 bg-[#333333] rounded-sm p-2' type="text" />
          </div>
          
          <div className='flex items-center justify-center'>
            <button onClick={added} className='font-bold bg-[#4b42ff] rounded-full w-1/4 h-8'>Add</button>
          </div>
        </div>
        <div className='w-full h-[40%] mt-7 p-6 rounded-xl border-2 border-gray-200'>
          <h1 className='text-xl font-bold'>Total Cost</h1>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Cart
