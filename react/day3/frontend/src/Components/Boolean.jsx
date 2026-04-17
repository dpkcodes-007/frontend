const BooleanComp = () => {
   const value = true
   const count = false
   const main = false 
   const indvaus = true
   const news = true 
   const breking = false 
   const keyandvaluse = true
   const react = true
   const transfiler = true
   const sumofmain = false
  

    return(<>
      <h2> Ternary </h2>
    <ul>
        <li><h3>{value?"this is true":"this is false"}</h3></li>

        <li><h3>{count?"this is true":"this is false"}</h3></li>

        <li><h3>{main?"this is true":"this is false"}</h3></li>

        <li><h3>{indvaus?"this is true":"this is false"}</h3></li>

        <li><h3>{news?"this is true":"this is false"}</h3></li>

        <li><h3>{breking?"this is true":"this is false"}</h3></li>

        <li><h3>{keyandvaluse?"this is true":"this is false"}</h3></li>

        <li><h3>{react?"this is true":"this is false"}</h3></li>

        <li><h3>{transfiler?"this is true":"this is false"}</h3></li>

        <li><h3>{sumofmain?"this is true":"this is false"}</h3></li>
    </ul>


         <h2> Optional </h2>
    <ul>
        <li><h3>{value&&"this shows only true"}</h3></li>

        <li><h3>{count&&"this shows only true"}</h3></li>

        <li><h3>{main&&"this shows only true"}</h3></li>

        <li><h3>{indvaus&&"this shows only true"}</h3></li>

        <li><h3>{news&&"this shows only true"}</h3></li>

        <li><h3>{breking&&"this shows only true"}</h3></li>

        <li><h3>{keyandvaluse&&"this shows only true"}</h3></li>

        <li><h3>{react&&"this shows only true"}</h3></li>

        <li><h3>{transfiler&&"this shows only true"}</h3></li>

        <li><h3>{sumofmain&&"this shows only true"}</h3></li>
    </ul>
    
    
    </>)

}
export default BooleanComp 