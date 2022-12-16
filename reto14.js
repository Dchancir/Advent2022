// A Tree node
function getOptimalPath(path) {
    // For storing the result
    // in a 1-D array, and
    // simultaneously updating
    // the result.
    let memo = [];
    let n = path.length - 1;
   
    // For the bottom row
    for(let i = 0; i < path[n].length; i++)
        memo[i] = path[n][i];
   
    // Calculation of the
    // remaining rows, in
    // bottom up manner.
    for(let i = path.length - 2; i >= 0; i--)
        for(let j = 0;
                j < path[i].length; j++)
            memo[j] = path[i][j] +
                      Math.min(memo[j],
                               memo[j + 1]);
   
    // Return the
    // top element
    return memo[0];
}

getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1