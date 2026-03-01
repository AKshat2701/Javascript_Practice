


const user = 
{
    name : "Akshat",
    age : 23,
    city : "delhi"
}


// for(let key in user)
// {
//     console.log(key, user[key])
// }


for(let key in obj)
{
    if(user.hasOwnProperty(key))
    {
        console.log(key)
    }
}