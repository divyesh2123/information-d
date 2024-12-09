import React from 'react'

 function ChildMy(props) {

    console.log(props);
  return (
    <div>{
        
        props.data.map((v,index)=>{
            return (<div key={index}>{v}</div>)
        })
    }</div>
  )
}
export default  React.memo(ChildMy,(prev,next)=>{

if(prev.data.length == next.data.length)
{
    return true;
}
else
{
    return false;
}
   
});
