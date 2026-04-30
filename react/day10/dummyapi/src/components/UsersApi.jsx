import React, { useEffect, useState } from 'react'

const UsersApi = () => {
    
    const [user,setUser] = useState([])

    useEffect(()=>{

            const fetchUser = async () =>{
         
        const details = await fetch('https://dummyjson.com/users')
        const Showdetails = await details.json()
        
        setUser(Showdetails.users)

    }  

    fetchUser()

    },[])




  return (
    <>
    <table border={1}>
        <thead>
            <tr>
                <th>S-NO</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
        </thead>

        <tbody>
            {user.map((deepak)=>(
             
             <tr key={deepak.id}>
                <td>{deepak.id}</td>
                <td>{deepak.firstName} {deepak.lastName}</td>
                <td>{deepak.gender}</td>
                <td>{deepak.age}</td>



             </tr>


            ))}
        </tbody>
    </table>
    
    </>
  )
}

export default UsersApi