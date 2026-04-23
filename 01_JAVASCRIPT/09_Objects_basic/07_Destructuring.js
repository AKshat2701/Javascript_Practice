// Destructuring means exracting values from an object and storing them in variable in a clean way . 


const user1 =
{
    name: "Akkshat",
    favFood : "Dal Chawal",
    age : 29,
    address : 
    {
        city : "Prayagraj",
        pincode : 2020200
    }
}


// const food = user1.favFood
// const age1 = user1.age

// console.log(food, age1)


// const {name, age, favFood} = user1
// console.log(name)
// console.log(age)
// console.log(favFood)

const {name : Username} = user1
const {favFood : food} = user1
const {age : AGE} = user1

// console.log(Username)
// console.log(food, AGE)



// const { country = "India"} = user1
// console.log(country)

// const {address : {city}} = user1
// console.log(city)

const city = user1.address?.city
console.log(city)
