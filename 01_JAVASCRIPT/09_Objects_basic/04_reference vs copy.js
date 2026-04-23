// Objects are stored in Heap memory

const user1 = { age : 20}

// const user2 = user1 

// user2.age = 90
// console.log(user1.age)


//shallow and deep copy 
// const user2 = {...user1}

// const user3 = Object.assign({},  user1)


const user2 = JSON.parse(JSON.stringify(user1))

console.log(user2)
