function countTime(leds) {
    let count = 0;
    while (leds.some(led => led === 0)) {
        leds = leds.map((led, index, arr) => {
            if ((index === 0 && arr[arr.length - 1]) ||
                !led && arr[index - 1]) {
                led = 1;
                }
            return led;
        })
        count++;
    }
    return 7 * count;
  }

const leds = [0, 0, 1, 0, 0];
console.log(countTime(leds));