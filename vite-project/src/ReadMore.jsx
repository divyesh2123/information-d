import React, { useState } from 'react'

export default function ReadMore({text}) {

    const [isReadMore,setIsReadMore]= useState(false);

   

    const mytext1 = React.useMemo(()=>{
        console.log("This is being called");
        return text.slice(0,20).concat("..readMore..");
    },[text])
  return (
    <div onClick={()=>{
        setIsReadMore(!isReadMore)
    }}>
        { isReadMore == false? text : mytext1 }
    </div>
  )
}
