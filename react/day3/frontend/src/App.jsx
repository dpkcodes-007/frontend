import BooleanComp from "./Components/Boolean"
import NullUndefinedComp from "./Components/Null"
import NumberComp from "./Components/Number"
import StringComp from "./Components/String"

const App = () => {
  return (
    <>

    <ol>
    
      <li><h1>This is String Rendering</h1></li>
      <StringComp />

      <li><h1>This is Number Rendering</h1></li>
      <NumberComp/>

      <li><h1>This is boolean Rendering</h1></li>
      <BooleanComp/>

      <li><h1>This is Null Rendering</h1></li>
      <NullUndefinedComp/>
      </ol>
      
    </>
  )
}
export default App