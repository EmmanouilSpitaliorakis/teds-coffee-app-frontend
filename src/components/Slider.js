const Slider = ({min, max, step, value, name, onChangeValue, cond}) => {
  return (
    <div>
        <label className="mx-4 text-gray-300">{name}: </label>
        {cond === true ?
        <input
            className="ml-7"
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            name={name}
            onChange={onChangeValue}
            /> : 
            <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            name={name}
            onChange={onChangeValue}
            />}
        <span className="text-gray-300 ml-3">{value}%</span>
    </div>
  )
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 5,
}

export default Slider