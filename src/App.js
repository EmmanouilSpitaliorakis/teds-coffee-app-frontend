import Button from "./components/Button";
import Slider from "./components/Slider";
import Outputs from "./components/Outputs";
import {useState, useRef} from "react";
import { Flavours } from "./components/Flavours";

function App() {

  const rangeRef1 = useRef();
  const rangeRef2 = useRef();

  const buttons = [
  { id: "Espresso", data: "Espresso" },
  { id: "Milk", data: "Milk" },
  { id: "Signature", data: "Signature" },
];

  const rangeLinearGradient1 = (value, min, max) => {
    const percentage = ((value - min) / (max - min)) * 100 + "%"
    const newBackgroundStyle = `linear-gradient(90deg, ${"#1939bd"} 0% ${percentage}, ${"#fdfdfd"} ${percentage} 100%)`
    rangeRef1.current.style.background = newBackgroundStyle
  }

  const rangeLinearGradient2 = (value, min, max) => {
    const percentage = ((value - min) / (max - min)) * 100 + "%"
    const newBackgroundStyle = `linear-gradient(90deg, ${"#1939bd"} 0% ${percentage}, ${"#fdfdfd"} ${percentage} 100%)`
    rangeRef2.current.style.background = newBackgroundStyle
  }

  const [isEspresso, setEspresso] = useState(true)
  const [activeButton, setButton] = useState(0)

  const [value1, setValue1] = useState(100)
  const [value2, setValue2] = useState(100 - value1)

  const onChange1 = e =>{
    setValue1(e.target.valueAsNumber)
    setValue2(100 - e.target.valueAsNumber)
    rangeLinearGradient1(e.target.valueAsNumber, 0, 100)
    rangeLinearGradient2(100 - e.target.valueAsNumber, 0, 100)
  }

  const onChange2 = e =>{
    setValue2(e.target.valueAsNumber)
    setValue1(100 - e.target.valueAsNumber)
    rangeLinearGradient2(e.target.valueAsNumber, 0, 100)
    rangeLinearGradient1(100 - e.target.valueAsNumber, 0, 100)
  }

  return (
    <div>
      <div className="p-5 flex justify-evenly font-medium">
        <Button name="Espresso"
                isEspresso={isEspresso}
                setEspresso={setEspresso}
                buttons={buttons}
                setActiveTab={setButton}
                activeTab={activeButton}/>
      </div>
      {activeButton !== 2 ? (
        <div>
          <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-1.5 m-12 max-w-3xl mx-auto">
            <Slider
                    name="Gesha"
                    value={value1}
                    onChangeValue={onChange1}
                    rangeRef={rangeRef1}
                    />
            <br/>
            <Slider
                    name="Sudan Rume"
                    value={value2}
                    onChangeValue={onChange2}
                    rangeRef={rangeRef2}
                    />
          </div>
          <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-1.5 m-12 max-w-3xl mx-auto">
            <Outputs
                    sliderValue={value2}
                    />
          </div>
          <div className="flex flex-col items-center p-1.5 mx-auto scale-225">
            <Flavours
                    isEspresso={buttons[activeButton].data}
                    pct={value1}
                    />
          </div>
        </div>
      ) : (
       <div>
         <img className="p-1.5 m-12 mx-auto max-w-prose" src={require("./static/images/signature.jpeg")} alt="Signature Recipe"/>
       </div>
      )}
    </div>
  );
}

export default App;
