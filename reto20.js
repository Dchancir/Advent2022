function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes = reindeerTypes
    .sort((a, b) => a.weightCapacity - b.weightCapacity)

    return gifts.map(gift => {
        let usedReindeers = {};
        let residualWeight = gift.weight;
        reindeerTypes = reindeerTypes.filter(x => x.weightCapacity < gift.weight);
        while (residualWeight > 0) {
            reindeerTypes.map(x => {
                if (residualWeight - x.weightCapacity >= 0) {
                    usedReindeers[x.type] ? usedReindeers[x.type] += 1 : usedReindeers[x.type] = 1
                    residualWeight -= x.weightCapacity
                }
            })
        }
        return ({
            country: gift.country,
            reindeers: reindeerTypes.map(y => {
                return {
                    type: y.type,
                    num: usedReindeers[y.type]
                }
            }).reverse()
        })
    })

}

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]
  
  const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ]

console.log(howManyReindeers(reindeerTypes, gifts))