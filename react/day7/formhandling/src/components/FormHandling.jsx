import React, { useState } from 'react'

const FormHandling = () => {

    const [ username,setUserName] = useState("")
    const [clickdata,setClickData] = useState("")
    

    const handle = (e) => {
        setUserName(e.target.value)
        if (username.length >=9){
         alert("only 9 is available")            
        }
    }

    const buttonchange = (e)=>{
        e.preventDefault()


        setClickData(username)

    }

    



 


  return (
    <>
    
        <form >
            <h1>FORM</h1>
            <input onChange={handle} type="text" placeholder='enter the value'/>  
            <button onClick={buttonchange}>click here</button>
        </form>
        
        <h2>{clickdata}</h2>
        </>
  )
}

export default FormHandling