// example 1    const,let / var

const userName = 'Anna'

function showMessage() {
    const message = 'hello'
    if(true){
        var name = 'Peter'
        console.log('In IF block username', userName)
        console.log('In IF block name', name) 
        console.log('In IF block message', message)
    }
    console.log('In function', name)   // <- error because we have no access to 'name' 
    console.log(`hello ${userName}`)
}

//console.log('In general', message)   // <- error because we have no access to 'message' 

showMessage()



// ecxample 2
