import React, { useEffect, useState } from 'react'

const DummyApi = () => {
   
    const [dummy,setDummy] = useState([])

    useEffect(()=>{
        
    const fetchh = async()=>{

    const show = await fetch("https://dummyjson.com/recipes")
    const changeshow = await show.json()

    setDummy(changeshow.recipes)



    }
    fetchh()
     

    },[])



  return (
    <>

    <table border={2}>
      <thead>
      <tr>
          <th>S.no</th>
          <th>Food</th>
          <th>ingredients</th>
      </tr>
      </thead>
      <tbody>

        {dummy.map((e)=>(

      <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.ingredients}</td>
      </tr>
    
        ))}
      
      </tbody>
    </table>
    
    </>
  )
}

export default DummyApi