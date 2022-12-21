function dryNumber(dry, numbers) {
    const allNumbers = [ ...Array(numbers).keys() ].map( i => i+1);
    return allNumbers.filter(n => (n + '').includes(dry) )
}

console.log(dryNumber(2, 20))