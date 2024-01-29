import chalk from 'chalk';

// solution 1 
console.log('solution #1')

function whatAge (age) {
    return age >= 18 ? true : false
}

const isAdult = whatAge(25)

if (isAdult) {
    console.log(chalk.green('The person is an adult'))
} else {
    console.log(chalk.red('The person is NOT an adult'))
}

// console.log('Is the person an adult? ', whatAge(25))
// console.log('Is the person an adult? ', whatAge(15))
console.log('-----------------')
console.log('')

// solution 2
console.log('solution #2')

function checkIfAdult(age) {
    return age >= 18;
}

const age1 = 25;
const age2 = 15;

console.log(`Is the person with age ${age1} an adult?`, checkIfAdult(age1));
console.log(`Is the person with age ${age2} an adult?`, checkIfAdult(age2));

