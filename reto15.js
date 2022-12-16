function decorateTree(base) {
    const dict = {
        "PP": "P",
        "BB": "B",
        "RR": "R",
        "BP": "R",
        "PB": "R",
        "BR": "P",
        "RB": "P",
        "PR": "B",
        "RP": "B"
    }
    base = base.split(" ")
    let list = new Array(base.length).fill(base)
    return list.reduce((total, x) => {
        return total.concat(
            [new Array(total[total.length - 1].length - 1).fill('-')
            .map((_, i) => {
                return dict[total[total.length - 1].slice(i, i + 2).join('')]
            })]
        )}
        ,[base]
    ).slice(0, base.length).map(x => x.join(' ')).reverse()
}

decorateTree('B P R P')