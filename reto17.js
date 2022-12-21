function carryGifts(gifts, maxWeight) {
    if (!gifts.every(gift => maxWeight >= gift.length)) {
        return []
    }    
    return gifts.reduce((acc, gift, i) => {
        const nextLength = gift.length;
        const currentLength = acc[acc.length -1] 
        ? acc.at(-1).replace(/ /g, '').length : null;
        if (currentLength && currentLength + nextLength <= maxWeight) {
            acc[acc.length - 1] += ' ' + gift;
            acc[acc.length - 1] = acc[acc.length - 1].trim();
        } else {
            acc.push(gift);
        }
        return acc;
    }, [])
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))