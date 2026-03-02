// -> Spred Opertor copires properties from one Object into another 


const user1 = 
{
    name : "Akshat",
    age : 29,
    email : "akshatsri2710@gmail.com"
}


const user2 = {...user1}



// user2.age = 90
// console.log(user1)
// console.log(user2)

// const user3 = 
// {
//     ...user1,
//     age: 409,
//     city: "NOIDA",
//     isGoodBoy : true
// }
// console.log(user3)


// const obj1 = {a : 1, true: false}
// const obj2 = {b : 2}

// const merged = {...obj1, ...obj2}
// console.log(merged)


const user4 = JSON.parse(JSON.stringify(user1))


console.log(user4)

