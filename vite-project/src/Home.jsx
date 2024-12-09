import React, { useEffect, useState } from 'react'

export default function Home() {

    const [data,setData]= useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setData(y)
        })

    },[]);

    console.log(data);
  return (
    <div>Home</div>
  )
}
