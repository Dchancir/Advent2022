function sortToys(toys, positions) {
    return toys.sort((a, b) => {
        return positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
    })
}

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))

