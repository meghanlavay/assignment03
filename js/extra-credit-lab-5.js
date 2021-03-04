let miles;
let gallons;
let mpg;
let again = 'y';
let i;

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your fuel tank hold?'));
    if (miles > 0 && gallons > 0) {
        mpg = miles / gallons;
        document.write(`Your car gets ${mpg} miles per gallon.`);
    } else {
        alert('One or both entries in invalid');
    }
    again = prompt('Run application again? (y or n)', 'y');
        if (again === 'y' || again === 'n') {
            break;
        } else {
            prompt('Run application again? (y or n)', 'y');
            i++;
        }
} while (again === 'y');