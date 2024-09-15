import React, { useState } from 'react'
import useConvertorLogic from './useConvertorLogic';

function Converter() {
    const [from,setfrom]=useState('usd')
    const[amount,setamount]=useState(0)
    const[to, setTo]=useState('inr');
    const[changedAmount, setchangedamount]=useState(0);

  const object=useConvertorLogic(from)||[];
  const arr=Object.keys(object);
  //console.log(arr)
  const convert= ()=>{
    setchangedamount(amount*object[to]);
  }
    
  return (
    <div className='bg-gray-500 w-1/2 mx-auto p-6 mt-[12%] mb-[13%] rounded-xl bg-opacity-60 border border-white'>
      <h1 className='text-white text-center font-bold text-2xl '>Currency Calculator</h1>
      <form onSubmit={(e)=>{e.preventDefault()
        convert();
      }} >
        <div className='bg-white text-center my-2 w-[85%] mx-auto text-white rounded-xl'>
      <div className='flex justify-between'><label className='text-gray-400 m-2'>From</label>
      <label className='text-gray-400 m-2' >Currency type</label>
        </div>
        <div className='flex justify-between'>
        <input className='p-6 w-[50%] border-none text-black rounded-b-xl outline-none placeholder:text-black' 
        
        value={amount} 
        onChange={(e)=>setamount(e.target.value)}
        placeholder='0' type='number'/>
        <select className='text-black outline-none rounded-lg mr-1' value={from}
        onChange={(e)=>setfrom(e.target.value)}>
              {arr && arr.map((curr)=>(<option value={curr} key={curr}>{curr.toUpperCase()}</option>))}
  
</select>

      </div></div>
      <div className='bg-white text-center mt-[2%] w-[85%] mx-auto text-white rounded-xl'>
      <div className='flex justify-between'><label className='text-gray-400 m-2'>To</label>
      <label className='text-gray-400 m-2'>Currency type</label>
        </div>
        <div className='flex justify-between'>
          
          <input className='p-6 w-[50%] border-none text-black outline-none rounded-b-xl' 
          value={changedAmount} 
          onChange={(e)=>setTo(e.target.value)}
          placeholder='0' type='number' disabled/>
        <select className='text-black outline-none rounded-lg mr-1' value={to} 
        onChange={(e)=>setTo(e.target.value)}>
        { arr && arr.map((curr)=>(<option value={curr} key={curr}>{curr.toUpperCase()}</option>))}
</select>
      </div></div>
      <button className='bg-blue-500 text-center m-4 p-5 rounded-xl ml-[7.5%] w-[85%]   hover:bg-blue-300 transition-transform duration-400 ease-in-out hover:ease-in-out ' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form></div>
  )
}

export default Converter
