let futureValue;
let investment;
let rate;
let years;

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years'));

futureValue = investment;
for (let i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

document.write(`Investment amount: $${investment}<br>`);
document.write(`Interest rate: $${rate}<br>`);
document.write(`Years: $${years}<br>`);
document.write(`Future value: $${furtureValue.toFixed(2) }<br>`);