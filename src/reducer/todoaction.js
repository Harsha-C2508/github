import axios from 'axios';


export function getTodo(){
    return axios.get("http://localhost:8080/todo")
}

export function deleteTodo(id){
    return axios({
        url:`http://localhost:8080/todo/${id}`,
        method: 'DELETE'
    })
}

export function addTodo({title,status}){
    return axios({
        url:`http://localhost:8080/todo`,
        method:"POST",
        data:{
            title,
           status
        }
    })
}

export function toggleTodo({id,newStatus}){
    return axios({
        url: `http://localhost:8080/todo/${id}`,
        method: "PATCH",
        data:{
                status: newStatus
        }
    })
}