// lecture 1 

const country = "United States"
const continent = "North America"
let population = 331.9
let description = 'United States is in North America, and its 332.9 million people speak english'

console.log(country)
console.log(continent)
console.log(population)


const isIsland = false
const language = "english"

console.log(isIsland)
console.log(language)

// 1. If your country split in half, and each half would contain half the population then how many people would live in each half?

console.log(population / 2)


// 2. Increase the population of your country by 1 and log the result to the console

population = 332.9
console.log(population)

// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?

false

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?

false


// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

console.log(description)

// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

let descriptionTwo = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(descriptionTwo)

// . If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like

if (population >= 33) {
    console.log(`${country}'s population is above average'.`)
} else {
    console.log(`${country}'s population is 22 million below average'`)
}
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)

// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; 
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// number 1
console.log('9' - '5');

// number 2 
console.log('19' - '13' + '17');

// number 3   
console.log('19' - '13' + 17)

// number 4 
console.log('123' < 57)

// number 5 
console.log(5 + 6 + '4' + 9 - 4 - 2)

// Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
let numNeighbours = prompt('How many neighbour countries does your country have?')
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
if (numNeighbours == 1) {
    console.log()
}
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation