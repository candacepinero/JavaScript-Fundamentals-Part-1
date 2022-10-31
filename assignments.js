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
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original