import chalk from 'chalk';

// solution 1 
console.log('solution #1')

function checkIfAdult1 (age) {
    // return age >= 18 ? true : false     //  - use of "tarnarnyj operator"
    return age >= 18
}

const isAdult = checkIfAdult1(25)

if (isAdult) {
    console.log(chalk.green('The person is an adult'))
} else {
    console.log(chalk.red('The person is NOT an adult'))
}

console.log('-----------------')
console.log('')

// solution 2
console.log('solution #2')

function checkIfAdult2(age) {
    return age >= 18;
}

const age1 = 25;
const age2 = 15;

console.log(`Is the person with age ${age1} an adult?`, checkIfAdult2(age1));
console.log(`Is the person with age ${age2} an adult?`, checkIfAdult2(age2));

