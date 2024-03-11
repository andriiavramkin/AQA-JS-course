// toDos
async function getToDo(){
    try { 
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const body = await result.json()
    console.log(body)
    } catch (error) {
        console.error('Error fetching to-do:', error)
    }
}


// //users
async function getUser(){
    try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    const body = await result.json()
    console.log(body)
    } catch (error) {
        console.error('Error fetching user:', error)
}
}

Promise.all([
    getToDo(), 
    getUser()
])
    .then(() => {
    console.log('Requests are completed.')
})