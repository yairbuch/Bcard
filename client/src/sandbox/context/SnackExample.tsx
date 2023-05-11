import React, { useState } from 'react'
import { useSnack } from '../../providers/SnackbarProvider'

const SnackExample = () => {
   const snack= useSnack();
   const [message,setMessage] = useState("");
   const FireSnack =()=>{snack('success',message);
setMessage('');}
  return (
    <div style={{position:"fixed", right:"50%", top:"50%"}}>
       <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} /> 
       <button onClick={FireSnack}>click</button>
    </div>
  )
}

export default SnackExample