import React from 'react'

const TodoItem = ({title,id,status,handleDelete,handleToggle}) => {
  return (
    <div style={{display:"flex",gap:"2rem",justifyContent:'space-between',margin:"10px"}}>
        <div style={{display:"flex",gap:"2rem",width:"70%",marginLeft:"10px"}}>
        <h2>{id}</h2>
        <h2>{title}</h2>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",width:"30%",padding:"5px"}}>
            <button style={{height:"40px"}} onClick={()=>handleToggle(id, !status)}>{status?"Completed":'Not completed'}</button>
            <button style={{height:"40px"}} onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem