// const obj = {
//     name : "Akshat",
//     isDev : true,
//     car : "Rubicon",
//     age : 23
// }

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.isDev)


// obj.car = "Jeep rubicon"
// obj.name = "AKSHAT"
// obj.age = 24 
// obj.isDev = false
// console.log(obj)





// console.log(obj.fullname)

// let key = "age" ;
// console.log(obj[key])

// console.log(obj.key)


// let user = {
//     name : "akshat",
//     age : 23,
//     city : "delhi"
// };

// console.log(user.name)
// console.log(user["name"])

// console.log(user["city"])




// let car = {
//   brand: "Toyota",
//   model: "Fortuner",
//   year: 2023
// };

// console.log(car["brand"], car["model"])

// let student = {
//   name: "Rahul",
//   marks: {
//     maths: 90,
//     science: 85
//   }
// };

// console.log(student.marks.science)
// console.log(student["marks"]["science"])



// let obj = 
// {
//     a : 10,
//     b : 20,
//     c : 30
// };


// let key = "b"
// console.log(obj[key])


// let user = {
//     name : "akshat",
//     country : "india"
// }

// user.age = 23;
// console.log(user)


// let laptop = {
//   brand: "Asus",
//   price: 60000
// };

// laptop.price = 65000
// console.log(laptop)



// let person = {
//     name : "Akshat",
//     address : 
//     {
//         city : "Mumbai",
//         pincode : 400001
//     }
// }

// let key = person.address.pincode
// console.log(key)

// console.log(person.address.pincode)

// let data = {
//   users: [
//     { name: "A", age: 20 },
//     { name: "B", age: 25 },
//     { name: "C", age: 30 }
//   ]
// };

// console.log(data.users[1].age)
// console.log(data.users[0].name)

// console.log(data.users)



// let obj = {
//   "first name": "Akshat",
//   age: 24
// };

// console.log(obj["first name"])


// let user = 
// {
//     name : "Rahul",
//     age : 23,
//     country : "India"
// }

// let prop = "country";


// console.log(user["country"])



// let car = 
// {
//     brand : "Jeep",
//     model : "Rubicon",
//     price : 85000
// }

// let x = "model"
// console.log(car[x])


// let obj = 
// {
//     name : "Akshat"
// }


// let key = "age"
// let value = 24

// obj[key] = value
// console.log(obj)


// let obj = 
// {
//     name : "Akshat"
// }

// let key = "brand"
// let value = "Rubicon"

// obj[key] = value
// console.log(obj)



// let product = 
// {
//     name : "Laptop",
//     price : 50000
// };


// let k = "price"

// product[k] = 55000

// console.log(product)



// let student = 
// {
//     name : "Aman",
//     marks : 80
// }

// function getValue(a, b)
// {
//     return a[b]
// }
// console.log(getValue(student, "marks"))


// let user = 
// {
//     name : "Akshat",
//     age : 24,
//     city : "delhi"
// }

// for (let key in user)
// {
//     console.log(key , "->", user[key])
// }


// let user = 
// {
//     name : "Akshat",
//     age : 23,
//     city : "Delhi"
// };

// for(let key in user)
// {
//     console.log(key)
// }


// let obj = {}
// let key1 = "a"
// let key2 = "b"

// obj[key1] = 10 
// obj[key2] = 20

// console.log(obj)


// let name = "Akshat"
// for(let ch in name)
// {
//     console.log(ch)
// }


let person = 
{
    name : "Akshat",
    address :
    {
        city : "Delhi",
        pincode : 120003
    }

}

// console.log(person["address"]["pincode"])

// console.log(Object.keys(person["address"]))


// console.log(Object.entries(person))

// console.log(Object.values(person))


// for (let [key, value] of Object.entries(person))
// {
//     console.log(key, value)
// }


// let user =
// {
//     name : "Akshat",
//     age : 23,
//     city : "Delhi"
// }; 

// for(let i in user)
// {
//     console.log(i , user[i])
// }

let user = 
{
    name : "Akshat",
    age : 23

}

let {name , age} = user

console.log(name, age)
