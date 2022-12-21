function fixLetter(letter) {
    letter = letter.replace(/\s+/g, ' ').trim()
    letter = letter.charAt(0).toUpperCase() + letter.slice(1);
    letter = letter.concat(letter.slice(-1).match(/[a-z]/g) ? '.': '');
    return letter.replace(/\?+/g, '?')
    .replace(/\s,|\s\,/g, ',')
    .replace(/Santa claus/gi, 'Santa Claus')
    .replace(/\s\./, '.')
    .replace(/([:\? | \. | \!]+\s+)(.)/g, (_, prefix, letter) => prefix + letter.toUpperCase())
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?