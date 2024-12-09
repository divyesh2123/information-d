import React, { useState } from 'react'
import MyChild from './MyChild';

export default function MyMain() {

    const [data,setData]= useState([]);

    const [input,setInput]= useState('');

    const handleChange= (e)=>{

        setInput(e.target.value);

    }

    const saveInfo = ()=>{

        let a= [...data];
        a.push(input);

        setData(a);

    }

    const m= React.useCallback(()=>{

        let p = [...data];

        p.slice(index,1);

        setData(p);

    },[data]) 
  return (
    <div>
        <input type='text' name="firstName" onChange={handleChange}/>
        <input type='button' value="save" onClick={saveInfo}/>



            <MyChild data= {data} remove={m}/>

    </div>
  )
}
