


const user = {
  name: "Akshat",
  age: 24,
  place : "delhi"
};

console.log("name" in user)
console.log("email" in user)


console.log(user.hasOwnProperty("name"))
console.log(user.hasOwnProperty("email"))

