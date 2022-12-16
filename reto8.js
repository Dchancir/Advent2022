function checkPart(part) {
    return [...part].some((x, i, arr) => {
      let w = arr.filter((_, y) => y != i)
      return w.join("") == w.reverse().join("")
    })
  }
console.log(checkPart('uwu'))