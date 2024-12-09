import React, { useReducer, useState } from 'react'

export default function MyReducerExample() {

    const myReducer = (state,action)=>{

        switch(action.type)
        {

            case "ADD":
                let p = [...state];
                p.push(action.payLoad);
                return p;

             default: 
             return state;
        }

    }

    const handelchange = (e)=>
    {
        setInput(e.target.value);

    }

    const [d,setd]= useReducer(myReducer,[]);
    const [input,setInput]= useState('');

    console.log(d);

    const saveInfo = ()=>{
        (setd{type:"ADD",payLoad:input});
    }
  return (
    <div>
        <input type='text' name="t" onChange={handelchange}/>


        <input type='button' value="Save" onClick={saveInfo}/>

    </div>
  )
}
