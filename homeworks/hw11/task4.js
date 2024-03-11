class ToDoFetcher {
    async getToDo(id) {
        try { 
            const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const body = await result.json()
            console.log('To-Do:', body)
        } catch (error) {
            console.error('Error fetching to-do:', error)
        }
    }
}

class UserFetcher {
    async getUser(id) {
        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const body = await result.json()
            console.log('User:', body)
        } catch (error) {
            console.error('Error fetching user:', error)
        }
    }
}


const toDoFetcher = new ToDoFetcher();
const userFetcher = new UserFetcher();

Promise.all([
    toDoFetcher.getToDo(2),
    userFetcher.getUser(2)
])
.then(() => {
    console.log('Requests are completed.')
})
