function printTable(gifts) {
    const giftNameMaxlength = Math.max(
        Math.max(...gifts.map(x => x.name.length)), 
        4);
    const giftQuantityMaxlength = Math.max(
        Math.max(...gifts.map(x => ('' + x.quantity).length)),
        8);
    const maxLength = giftNameMaxlength + giftQuantityMaxlength + 7;
    const createRow = (textA, textB, padChar) => {
        return '| ' + textA.padEnd(giftNameMaxlength, padChar) + ' |'+
        ' ' + textB.padEnd(giftQuantityMaxlength, padChar) + ' |'
    }
    const head = [
        ''.padEnd(maxLength, '+'),
        createRow('Gift', 'Quantity', ' '),
        createRow('-', '-' , '-')
    ]
    const tail = gifts.map(x => createRow(x.name, '' + x.quantity), ' ')
    tail.push(''.padEnd(maxLength, '*'))
    return [...head, ...tail].join('\n')
  }

console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]))