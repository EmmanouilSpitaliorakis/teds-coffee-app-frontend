const Slider = ({min, max, step, value, name, onChangeValue, cond}) => {
  return (
    <div className="w-5/6">
      <div className="w-full flex justify-between">
        <span className="text-gray-300">{name} :</span>
        <span className="text-gray-300">{value}%</span>
      </div>
      {cond === true ?
        <input
          className="py-1.5 h-2 w-full"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          name={name}
          onChange={onChangeValue}
        /> : 
        <input
          className="py-1.5 h-2 w-full"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          name={name}
          onChange={onChangeValue}
        />
      }
    </div>
  )
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 5,
}

export default Slider