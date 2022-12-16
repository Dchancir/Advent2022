function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let combinaciones = [];
    combinaciones.push([], [giftsCities[0]]);
    giftsCities.shift()
  
    giftsCities.map(x => {
      const newList = combinaciones.map(combinacion => {
        let _combinacion = [...combinacion]
        if(_combinacion.length < maxCities) {
            _combinacion.push(x)
        }
        return _combinacion
      })
      combinaciones = combinaciones.concat(newList)
    })
  
    combinaciones.shift()

    return Math.max(...combinaciones.map( e => {
        let sum = e.reduce((a, b) => a + b, 0) 
        return sum <= maxGifts ? sum : 0
        })
    )
}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

console.log(getMaxGifts(giftsCities, maxGifts, maxCities))