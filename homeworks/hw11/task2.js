// toDos
function getToDo(){
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((respond) => respond.json())
    .then((jsonBody) => console.log(jsonBody) )
    .catch((error)=> console.error(error))
}

//users
function getUser(){
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then((respond) => respond.json())
    .then((jsonBody) => console.log(jsonBody) )
    .catch((error)=> console.error(error))
}

Promise.all([
    getToDo(),
    getUser()
])

Promise.race([
    getToDo(),
    getUser()
])
