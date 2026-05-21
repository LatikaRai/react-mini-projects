import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { div } from 'three/tsl'

const App = () => {

  const [users, setUsers] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUsers(response.data)
  }

  let printUser = <h3 className='text-xl text-gray-300 text-center w-full font-semibold'>Loading...</h3>

  if(users.length>0){
    printUser = users.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-62 w-68 rounded-xl overflow-hidden'>
          <img className='object-cover h-full w-full' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-semibold text-lg py-2 text-center'>{elem.author}</h2>
        </a>
      </div>
    })
  } 

  useEffect(()=>{
    getData()
  },[index])

  return (
    <div className='h-screen w-full overflow-auto py-6 px-4 bg-black text-white'>
      <div className='h-[90%] flex flex-wrap items-center justify-between'>
        {printUser}
      </div>
      <div className='flex items-center justify-center gap-6'>
        <button
        style={{opacity:index == 1 ? 0.5 : 1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUsers([])
          }
        }} 
        className='py-2 px-6 bg-amber-400 text-black font-bold'>Prev</button>
        <h1 className='font-semibold px-6'>Page {index}</h1>
        <button
        onClick={()=>{
          if(index<users.length){
            setIndex(index+1)
            setUsers([])
          }
        }}  
        className='py-2 px-6 bg-amber-400 text-black font-bold'>Next</button>
      </div>
    </div>
  )
}

export default App
