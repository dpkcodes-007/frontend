const Landling = () =>{
   const num = 2
   const name = "deepak"
   const oppos = false //boolean?"mind":"no"
   const opp = null
   const conren = true
   

   return(<>
     <h2> {num}</h2>
     <h2>{name}</h2>
     <h2>{oppos?"this is true":"this is false"}</h2>
     <h2>{opp??"this is null"}</h2>
     <h2>{conren&& "this is true"}</h2>
   </>)
}
export default Landling