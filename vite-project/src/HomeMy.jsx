import React, { useState } from 'react'
import ChildMy from './ChildMy'

export default function HomeMy() 
{
    const [data,setData]= useState([]);

    const [input,setInput]= useState('');

    const handleChange = (e)=>{

        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSave= ()=>{

        let p = [...data];
        p.push(input)
        setData(p)
    }

    const remove = ()=>{

    }
  return (
    <>
    <input type='text' onChange={handleChange} />

    <input type='submit' value="Save" onClick={handleSave}/>

    <ChildMy data={data} remove={remove}/>
        
   
    </>
  )
}
