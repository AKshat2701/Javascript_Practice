// Optional chaining is used to safely access properties without causing an error if something is null or undefined. 



// const user = 
// {
//     name : "Akshat",
//     address :
//     {
//         city : "prayagraj"
//     }
// }


// console.log(user.address?.city)


// const profile = 
// {
//     user  :
//     {
//         profile :
//         {
//             email : "akshatsri2710@gmail.com"
//         }
//     }
// }


// console.log(profile.user?.profile?.email)


// const user = [{name : "Akshat"}]

// console.log(user[0]?.name)


const user =
{
    greet()
    {
        console.log("Hello")
    }
}; 

user.greet?.();
user.sayBye?.();