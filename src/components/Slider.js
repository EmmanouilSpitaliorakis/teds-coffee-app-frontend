import "./Slider.css"
import {useRef, useState} from "react"
import {createUseStyles} from 'react-jss'

const Slider = ({min, max, step, value, name, onChangeValue, rangeRef}) => {

  const useStyles= createUseStyles({
    rangeSlider: {
      "&::-webkit-slider-thumb":{

      }
    }
  });

  return (
    <div className="w-5/6">
      <div className="w-full flex justify-between">
        <span className="text-gray-300">{name} :</span>
        <span className="text-gray-300">{value}%</span>
      </div>
        <input className="range-slider"
          ref={rangeRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          name={name}
          onChange={onChangeValue}/>
    </div>
  )
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 5,
}

export default Slider