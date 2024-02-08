const users = [
    {
        name: 'Joe',
        email: 'joe@mail.com',
        age: 55,
        hasDog: false
    },
    {
        name: 'Jenny',
        email: 'jenny@mail.com',
        age: 15,
        hasDog: true
    },
    {
        name: 'Ostap',
        email: 'ostap@mail.com',
        age: 17,
        hasDog: false
    },
]

for (const {name, email, age, hasDog} of users) {

    console.log('User name is ', name)
    console.log('Users email is ', email)
    console.log('User age is ', age)

        if (hasDog){
            console.log(`User ${name} has a dog`)
        } else {
            console.log(`User ${name} does not have a dog`)
        }

    console.log('---------------')
}