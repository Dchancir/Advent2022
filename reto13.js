function getFilesToBackup(lastBackup, changes) {
    return [... new Set(changes.sort((a, b) => a[0] - b[0] || b[1] - a[1])
        .filter(e => e[1] > lastBackup)
        .map(e => e[0]))];
}
const lastBackup = 1546300800
const changes = [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes))