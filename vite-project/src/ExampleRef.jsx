import React, { useEffect, useRef } from 'react'

export default function ExampleRef() {

    const myref= useRef();

    useEffect(()=>{

        myref.current.focus();

    },[]);

  return (
    <div>
        
        <input type='text' name="fname1"
            
          />

            <input type='text' name="fname"
            
            ref={myref}/>

    </div>
  )
}
