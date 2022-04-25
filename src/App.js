import Button from "./components/Button";
import Slider from "./components/Slider";
import Outputs from "./components/Outputs";
import {useState} from "react";

function App() {

  const onClick = () => {
    console.log("click")
  }

  const [value1, setValue1] = useState(75)
  const [value2, setValue2] = useState(100 - value1)

  const onChange1 = e =>{
    setValue1(e.target.valueAsNumber)
    setValue2(100 - e.target.valueAsNumber)
  }

  const onChange2 = e =>{
    setValue2(e.target.valueAsNumber)
    setValue1(100 - e.target.valueAsNumber)
  }
  return (    
<div>
  <div class="p-5 flex justify-evenly font-medium">
    <Button name="Espresso" onClick={onClick}/>
    <Button name="Milk" onClick={onClick}/>
  </div>
  <br/>
  <div className="border-2 border-gray-300 rounded-lg py-1.5 mt-12 max-w-3xl mx-auto">
    <Slider
    name="Colombia Gesha"
    value={value1}
    onChangeValue={onChange1}
    cond={false}
    />
    <br/>
    <Slider
    name="Sudan Rume"
    value={value2}
    onChangeValue={onChange2}
    cond={true}
    />
  </div>
  <div className="border-2 rounded-lg max-w-3xl mx-auto m-10">
    <Outputs/>
  </div>
</div>
  );
}

export default App;
