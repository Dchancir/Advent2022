function getGiftsToRefill(a1, a2, a3) {
    const lacking = [];
    const gifts = [...new Set([...a1, ...a2, ...a3])];
    for (let gift of gifts) {
        const result = a1.some( e => e === gift)
                +a2.some( e => e === gift)
                +a3.some( e => e === gift)
        result === 1 && lacking.push(gift)
    }
    return lacking;
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3))

