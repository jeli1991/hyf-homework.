
// Get the command line arguments excluding the first two elements 
const numbers = process.argv.slice(2);

// Check if any numbers were provided
if (numbers.length === 0) {
  console.log('Please provide numbers as command line arguments.');

}

// Convert the string arguments to numbers
const parsedNumbers = numbers.map(Number);

// Check if any argument couldn't be parsed as a number
if (parsedNumbers.some(isNaN)) {
  console.log('Invalid number(s) provided.');
  process.exit(1);
}

// Calculate the sum of the numbers
const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);

// Calculate the average
const average = sum / parsedNumbers.length;

console.log('Average:', average);