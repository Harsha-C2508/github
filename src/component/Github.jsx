import React, { useReducer } from 'react'
import { useState } from 'react'
import { fetchUser } from '../Reducer/action'
import Reducer from '../Reducer/Reducer.jsx'

const initValue={
    isLoading: false,
    isError: false,
    data:[],
    token: ""
}
const Github = () =>{
    const [state,dispatch]= useReducer(Reducer,initValue)
    const [text,setText] = useState("")
  return (
    <div>
        <div>
            <input value={text}
            onChange={(e)=>setText(e.target.value)} 
            type="text"
            placeholder='Search here.....'
            />
            <button onClick={()=> fetchUser(dispatch,text) }>Search</button>
        </div>
        <div>
            {state.data.map((p)=>(
                <div key={p.login}>
                    <ul>
                        <li>{p.login}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Github