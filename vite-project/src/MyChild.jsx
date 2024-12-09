import React from 'react'
import MyMain from './MyMain'

function MyChild(props) 
{
    console.log(props);
  return (
    <div>
        
     
    </div>
  )
}

export default React.memo(MyChild)
