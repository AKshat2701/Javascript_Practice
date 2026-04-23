
const user = 
{
    name : "Akshat",
    city : "delhi",
    email : "akshatsri210@gmail.com",
    isLogged : true
}

// -> Method 1
// let count = 0 

// for(let key in user)
// {
//     count++
// }
// console.log(count)


// -> Method 2 

// const count = Object.keys(user).length
// console.log(count)

//-> Method - 3 
let count = 0 

for(let key in user )
{
    if(user.hasOwnProperty(key))
    {
        count++
    }
}

console.log(count)
