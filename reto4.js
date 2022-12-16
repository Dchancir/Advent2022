function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => a.l - b.l || a.w - b.w || a.h - b.h)
    .every((box, i) => {
        if( i === 0 ) return true;
        const prev = boxes[i - 1]
        return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
}

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 5, h: 2 },
    { l: 3, w: 4, h: 3 }
]

console.log(fitsInOneBox(boxes))