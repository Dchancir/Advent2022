function createCube(size) {
    let head = [];
    let tail = [];
    for (let i = 0; i < size; i++) {
        head.push(' '.repeat(size - (i + 1)) + 
                "/\\".repeat(i + 1) + 
                "_\\".repeat(size));
        tail.push(' '.repeat(i) + 
                "\\/".repeat(size - i) +  
                "_/".repeat(size))
    }
    return [...head, ...tail].join('\n');
  }

  console.log(createCube(5))