import { useState } from "react"

const Outputs = ({sliderValue}) => {

  const [colombiaGeisha, setColombiaGeisha] = useState({
    acidity: 4,
    sweetness: 3,
    texture: 2
  })

  const [ethiopianHeirloom, setEthiopianHeirloom] = useState({
    acidity: 2,
    sweetness: 4,
    texture: 4
  })
  
  const scoreToPercent = (sliderValue) => {
    var acidityDiff = colombiaGeisha.acidity - ethiopianHeirloom.acidity
    var sweetnessDiff = colombiaGeisha.sweetness - ethiopianHeirloom.sweetness
    var textureDiff = colombiaGeisha.texture - ethiopianHeirloom.texture

    var acidityStep = acidityDiff / 100
    var sweetnessStep = sweetnessDiff / 100
    var textureStep = textureDiff / 100

    var acidity = acidityStep * (sliderValue)
    var sweetness = sweetnessStep * (sliderValue)
    var texture = textureStep * (sliderValue)

    var acidity = colombiaGeisha.acidity - acidity
    var sweetness = colombiaGeisha.sweetness - sweetness
    var texture = colombiaGeisha.texture - texture

    return {acidity, sweetness, texture}
  }

  return (
    <div>
        <div className="text-gray-300 pt-3 pb-1.5 px-2">
            <label className="mx-4 text-gray-300">Acidity: </label>
            <span>{scoreToPercent(sliderValue).acidity}</span>
        </div>
        <div className="text-gray-300 py-1.5 px-2">
            <label className="mx-4 text-gray-300">Sweetness: </label>
            <span>{scoreToPercent(sliderValue).sweetness}</span>
        </div>
        <div className="text-gray-300 pt-1.5 pb-3 px-2">
            <label className="mx-4 text-gray-300">Texture: </label>
            <span>{scoreToPercent(sliderValue).texture}</span>
        </div>
    </div>
  )
}

export default Outputs