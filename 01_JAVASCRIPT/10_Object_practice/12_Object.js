




// //object literals 

// const mySymb = Symbol("key1")



// const JsUser = 
// {
//     name : "Akshat",
//     "full name" : "Akshat Srivastava",
//     [mySymb] : "key1",
//     age : 19,
//     location : "Noida",
//     email : "akshat@google.com",
//     isLoggedIn : true,
//     lastLoginDays : ["Monday" , "Saturday"]
// }


// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymb])


// // Object.freeze(JsUser)
// JsUser.email = "Akshatsri2710@gmail.com"

// console.log(JsUser)

// JsUser.greeting = function()
// {
//     console.log("Hello , JsUser")
// }

// JsUser.greetingTwo = function()
// {
//     console.log(`Hello , JsUser ${this.name}`)
// }

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


const tinder = new Object()


tinder.id = "123abc"
tinder.name = "Akshat"
tinder.isLoggedIn = false

// console.log(tinder)

const regularUser = 
{
    email : "Some@gmail.com",
    fullname : 
    {
        userFullName : {
            firstname : "Akshat",
            lastname : "Srivastava"
        }
    }
}



// console.log(regularUser?.fullname?.userFullName?.firstname)

const obj1 = { 1 : "A", 2 : "B"}
const obj2 = { 3 : "C" , 4 : "D"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({} , obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

