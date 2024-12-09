import React, { useRef } from 'react'

export default function StudentForm() {

    console.log("This is being recalled");

    const fname= useRef('');
    const lname = useRef('');
    const mname = useRef('');

    const handleSave = ()=>{

        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(mname.current.value);

    }
  return (
    <div>
            {fname.current.value}
            <input type='text' name="fname" ref={fname}/>
            <input type='text' name="lname" ref={lname}/>
            <input type='text' name="mname" ref={mname}/>

            <input type='button' value="Save" onClick={handleSave}/>

    </div>
  )
}
