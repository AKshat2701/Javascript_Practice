// Create an object for a student with:
// name
// rollNo
// marks (array)
// address (nested object)
// calculateAverage() method


const student = 
{
    name : "stuent1",
    rollno : 1 ,
    marks : [76,45,34,76,87,56],
    address :
    {
        city : "delhi",
        pin : 257301
    },

    average : function(){
        let sum = 0 
        for(let i of this.marks)
        {
            sum = sum + i
        }
        let avg = (sum / (this.marks.length))
        return avg.toFixed(2)
    }

}


console.log(student.average())


// Bank Account
// Create an object:
// accountHolder
// balance
// deposit(amount)
// withdraw(amount)
// checkBalance()


// const user = 
// {
//     accountHolder : "David",
//     balance : 69900,
//     deposit : 1000,
//     withdrawl : 9000,
//     checkbalance : function()
//     {
//         return this.balance
//     }
// }

// console.log(user.checkbalance())



// Car
// Model a car:
// brand
// model
// year
// isStarted (boolean)
// start()
// stop()


const car = 
{
    brand : "Tata",
    model : "harrier",
    year : 2026,
    isStarted : true, 
    start : function()
    {
        return "started"
    },
    stop : function()
    {
        return "STOOPPED" 
    }
}

console.log(car.start())
console.log(car.stop())
