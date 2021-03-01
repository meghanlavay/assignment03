for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' Marco! Polo!');
    } else if (i % 5 === 0) {
        console.log(i + ' Polo!');
    } else if (i % 3 === 0) {
        console.log(i + ' Marco!');
    } else
        console.log(i + ' This number is not part of the game');
}