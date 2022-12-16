function selectSleigh(distance, sleighs) {
    const maxSleigh = sleighs
    .filter(sleigh => sleigh.consumption * distance <= 20).pop();
    return maxSleigh ? maxSleigh.name : null;
}

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]
console.log(selectSleigh(distance, sleighs))