function checkJump(heights) {
    const maxHeightIndex = heights.indexOf(Math.max(...heights));
    const first = heights.slice(0, maxHeightIndex);
    const second = heights.slice(maxHeightIndex + 1);
    if (!(first.length && second.length)) {
        return false;
    }
    return (first.every((x, i) => {
        return i === 0 || x >= first[i - 1]
        }) 
        && (second.every((x, i) => {
        return i === 0 || x <= second[i - 1]
        })
    ))
}
const heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights))// true