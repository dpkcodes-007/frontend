import { useState } from "react"

const App = () => {

  const [data,setData] = useState()

  


  return (
    <>
    <div className="bg-indigo-200 flex justify-center items-center h-screen"> 
      
           <form className=" bg-white flex flex-col justify-center items-center gap-10 border-2 w-80 h-100 rounded-2xl">
     
     <div>
      <img src="/src/assets/login.png"  className="h-20 w-20" />
     </div>

     <div className="flex flex-col justify-center gap-5">
      <input className="border p-1" type="text" placeholder="Enter ur Name"/>
      <input className="border p-1" type="email" placeholder="Enter ur Email"/>
      <input className="border p-1" type="tel" placeholder="Enter ur Mobile"/>
      <button
        type="submit"  className="btn btn-primary"
      >
        Submit
      </button>
      
     </div>

     </form>
      
       </div>

    </>
  )
}

export default App