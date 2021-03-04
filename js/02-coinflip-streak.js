let coinFlip;
let i = 0
do {
    coinFlip = Math.round(Math.random());
    i++;
    if (coinFlip === 0) {
    console.log('Heads');
    } else if (coinFlip === 1) {
    console.log('Tails');
    }
} while (coinFlip === 0);
