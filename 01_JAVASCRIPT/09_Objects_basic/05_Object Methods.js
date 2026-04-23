

const user1 = 
{
    name : "Akshat",
    age : 23,
    city : "Prayagraj",
    email: "akshatsri2710@gmail.com",
    isLoggedIn : true

}

// console.log(Object.keys(user1)) 
//-> It takes an object as input and returns an array of its keys.



console.log(Object.values(user1))

// console.log(Object.entries(user1))
console.log(Object.entries(user1)[3])


for(let [key, value] of Object.entries(user1))
{
    console.log(key, value)
}

//used for shallow copy - merging
const user2 = Object.assign({}, user1)

console.log(user2)


console.log("---------------------------------")



// console.log(Object.hasOwn(user1, "age"))

// Object.freeze(user1)
// console.log(user1)


// const user = 
// {
//     name : "Akshat",
//     age : 23
// }

// Object.seal(user);
// user.age = 23;
// user.city = "Delhi"


// console.log(user)





const obj = Object.create(user1)

console.log(obj)
