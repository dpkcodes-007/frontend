import React, { useState } from 'react'
import { useEffect } from 'react'

const Todos = () => {
   const [todo,setTodo] = useState([])

   useEffect(() => {
     
    const fetchDummy = async()=>{
    
    const fetchtodo = await fetch('https://dummyjson.com/todos')
    const parsetodo = await fetchtodo.json()

    setTodo(parsetodo.todos)


   }
   fetchDummy()


   },[])


  return (
    <>
    <table border={1}>
        <thead>
           
        <tr>
            <th>Daily work no</th>
            <th>UserID</th>
            <th>TODO</th>
            <th>TODO Accomplished</th>

        </tr>

        </thead>
        
        <tbody>
            {todo.map((any)=>(
            <tr key={any.id}>
                <td>{any.id}</td>
                <td>{any.userId}</td>
                <td>{any.todo}</td>
                <td>{any.completed ? "Finished" : "Yet to Finsh !"}</td>
            </tr>


            ))}
        </tbody>

    </table>
    </>
  )
}

export default Todos