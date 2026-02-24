// const user = 
// {
//     name : "Hello world",
//     age : 23,
//     "like this" : true
// };

// for (let key in user)
// {
//     console.log(user[key])
// }



// const property = "firstname"
// const name = "Akshat"

// user[property] = [name]
// console.log(user)


// console.log(user["like this"])
// delete user["like this"]





// console.log(user.name)
// user.name = "JAVASCRIPT"
// console.log(user)



// delete user.age ;
// console.log(user)


// const obj = { 
//     a : "One",
//     b : "Two",
//     a: "Three"
// }

// console.log(obj)

// let num =
// {
//     a : 100,
//     b : 200,
//     title : "one day"

// }

// mulitpleByTwo(num)

// function mulitpleByTwo(obj)
// {
//     for(key in obj)
//     {
//         if(typeof obj[key] === "number")
//         {
//             obj[key] = obj[key] * 2
//         }
//     }
// }

// console.log(num)


// const a = {}
// const b = {key : "b"}
// const c = {key : "c"}

// a[b] = 123;
// a[c] = 456

// console.log(a[b])


// const user =
// {
//     name : "Akshat",
//     age : 23
// }

// const strObj = JSON.stringify(user)
// console.log(strObj)


// console.log(JSON.parse(strObj))



// console.log([..."Akshat"])

const user = {name : "Ldasdg", age : 21}
const admin = {admin: true, ...user}

console.log(admin)


