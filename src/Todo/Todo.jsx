import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { deleteTodo, getTodo, addTodo, toggleTodo } from '../reducer/todoaction';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todo = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
       handleTodoget()
    },[])
   const handleTodoget=()=>{
    setLoading(true);
    setError(false);
    getTodo()
    .then((res)=>{
        setData(res.data);
        setLoading(false);
    })
    .catch((err)=>{
        setLoading(false);
        setError(true);
    })
   }
   function handleAdd(title){
    setLoading(true);
        addTodo({
            title,
            status: false
        }).then(()=> handleTodoget());
   }
    const handleDelete=(id)=>{
        setLoading(true)
        deleteTodo(id).then((res)=> 
            handleTodoget())
    }
    function handleToggle(id,newStatus){
        setLoading(true);
        toggleTodo({id,newStatus})
        .then(()=>handleTodoget())
    }
  return (
    <div>
        {loading && <div>loading....</div>}
        {error && <div>error....</div>}
        <h1>TODO APP</h1>
        <AddTodo handleAdd={handleAdd}/>
        <div>
            {data.map((todo)=>(
                <div key={todo.id}>
                    <TodoItem 
                            id={todo.id} 
                            title={todo.title} 
                            status={todo.completed} 
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todo