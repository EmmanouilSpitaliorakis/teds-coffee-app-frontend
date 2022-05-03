const Outputs = ({sliderValue}) => {

  const colombiaGeisha = {
    acidity: 4,
    sweetness: 3,
    texture: 2
  }

  const ethiopianHeirloom = {
    acidity: 2,
    sweetness: 4,
    texture: 4
  }
  
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

    acidity = colombiaGeisha.acidity - acidity
    sweetness = colombiaGeisha.sweetness - sweetness
    texture = colombiaGeisha.texture - texture

    return {acidity, sweetness, texture}
  }

  let acidity = (Math.round(scoreToPercent(sliderValue).acidity * 100) / 100)
  let sweetness = (Math.round(scoreToPercent(sliderValue).sweetness * 100) / 100)
  let texture = (Math.round(scoreToPercent(sliderValue).texture * 100) / 100)

  let acidity_pct = (100 / 5) * acidity.toFixed(3)
  let sweetness_pct = (100 / 5) * sweetness.toFixed(3)
  let texture_pct = (100 / 5) * texture.toFixed(3)

  return (
    <div className="w-5/6">
      <div className="text-gray-300 pt-3 pb-1.5">
        <div className="w-full flex justify-between mb-1">
          <span className="mx-1 text-gray-300">Acidity: </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3.5">
          <div className="bg-slider h-3.5 rounded-full" style={{width:acidity_pct+"%"}}></div>
        </div>
      </div>

      <div className="text-gray-300 py-1.5">
        <div className="w-full flex justify-between mb-1">
          <span className="mx-1 text-gray-300">Sweetness: </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3.5">
          <div class="bg-slider h-3.5 rounded-full" style={{width:sweetness_pct+"%"}}></div>
        </div>
      </div>

      <div className="text-gray-300 pt-1.5 pb-3">
        <div className="w-full flex justify-between mb-1">
          <span className="mx-1 text-gray-300">Texture: </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3.5">
          <div className="bg-slider h-3.5 rounded-full" style={{width:texture_pct+"%"}}></div>
        </div>
      </div>
    </div>
  )
}

export default Outputs