import React, { useEffect, useState } from 'react'

const Timer = () => {
    
    const [start,setStart] = useState(0)

    useEffect(()=>{
      
    const runSeconds = setInterval(() =>{
       
        setStart((running)=> running+1 )

        return()=> clearInterval(runSeconds)


    },1500)




    },[])



  return (
    <>
    <center>
        <h1> The Time Starts Now : {start}</h1>
    </center>
    
    </>
  )
}

export default Timer