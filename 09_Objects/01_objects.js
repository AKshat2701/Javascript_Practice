// const myObj = {
//     alive : true ,
//     answer : 23, 
//     hobbies : ["eat", "sleep", "code"],
//     beverage : {
//         morning : "Coffee",
//         afternoon : "Iced Tea",
//     },

//     action : function()
//     {
//         return `This for ${this.beverage.morning}`;
//     }
// }



// console.log(myObj.alive)
// console.log(myObj.answer)
// console.log(myObj.hobbies[2])


// console.log(myObj["alive"])
// console.log(myObj["beverage"])
// console.log(myObj.beverage.morning)

// console.log(myObj.action())



// const vehicle = 
// {
//     wheels : 4, 
//     engine : function () 
//     {
//         return "Vrrrooooomm!"
//     }
// }

// const truck = Object.create(vehicle);
// truck.doors = 2 ;
// console.log(truck)
// console.log(truck.wheels);
// console.log(truck.engine())



// const user = 
// {
//     name : "Rohit",
//     age : 20,
//     emailId : "negi@gmail.com",
//     amount : 3400,
//     "home address" : "dwarka"
// }

// console.log(user.age)

// user.adhar = 12343
// console.log(user)

// user.amount = 5000
// console.log(user)


// delete user.emailId
// console.log(user)



// console.log(user["home address"])



// const user = 
// {
//     name : "Rohit",
//     age : 20,
//     emailId : "negi@gmail.com",
//     amount : 3400
// }

// const user2 = user
// user2.age = 90

// console.log(user)


// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// for(let keys in user)
// {
//     console.log(keys,user[keys])
// }


// const user = 
// {
//     name : "Rohit",
//     age : 20,
//     emailId : "negi@gmail.com",
//     amount : 3400
// }

// const name = user.name 
// const age = user.age 
// console.log(name)
// console.log(age)


// const {name , age , amount} = user

// console.log(name, age)
// console.log(amount)

// const arr = [10,20,30,40,50]

// const [first, second] = arr

// console.log(first, second)


// const {name : userName , age : userAge} = user

// console.log(userName)
// console.log(userAge)

// const tempArr = Object.keys(user)
// for(let item of tempArr)
// {
//     console.log(item)
// }



// for(let [keys, values] of Object.entries(user))
// {
//     console.log(keys, values)
// }


// const user = {
//     name : "Akshat",
//     age : 20,
//     emailId : "akshatsri2710@gmail.com",
//     amount : 34000,
//     greeting : function()
//     {
//         console.log(`Strick is comming on 18 oct ${this.name}`)
//         return 20
//     }
// }

// const user2 = {
//     name : "Mohan",
//     account : 201,
// }

// user2.greeting = user.greeting
// console.log(user2)
// user2.greeting()





const user = {
    name : "AKshat",
    age : 20,
    emailId
}
