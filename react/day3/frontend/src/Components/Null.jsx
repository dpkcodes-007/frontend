const NullUndefinedComp = () => {
     

    const data = null
    const subject = "React"
    const empty = null
    const box = null
    const value = 22
    const novalue = null
    const Components = "bricks"
    const nothing = null
    const name = null
    const arrayofobj = null
    const obj = "key and values" 

    //const sla 
    //const find;
    


    return (<>
   <h1 >Null</h1>

   <ol>
    
    <li><h3>{data??"This is Null"}</h3></li>

    <li><h3>{subject??"This is Null"}</h3></li>

    <li><h3>{empty??"This is Null"}</h3></li>

    <li><h3>{box??"This is Null"}</h3></li>

    <li><h3>{value??"This is Null"}</h3></li>

    <li><h3>{novalue??"This is Null"}</h3></li>

    <li><h3>{Components??"This is Null"}</h3></li>

    <li><h3>{nothing??"This is Null"}</h3></li>

    <li><h3>{name??"This is Null"}</h3></li>

    <li><h3>{arrayofobj??"This is Null"}</h3></li>

    <li><h3>{obj??"This is Null"}</h3></li>




   </ol>



    


    
    </>)

}
export default NullUndefinedComp