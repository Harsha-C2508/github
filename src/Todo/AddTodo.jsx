import React from 'react'
import { useState } from 'react'

const AddTodo = ({handleAdd}) => {
  const [text,setText] = useState("");
  return (
    <div style={{display:"flex",gap:"0.5rem",justifyContent:"center"}}>
        <input value={text} placeholder='Add todos...' onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>handleAdd(text)}>Add</button>
    </div>
  )
}

export default AddTodo