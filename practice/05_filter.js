//filter even numbers

// let num = [1,2,3,4,5,6,7,8]

// num.filter((item) => {
//     if(item % 2 == 0) 
//     {
//         console.log(item)
//     }
// })


let num = [122,32,53,35,2,3,54,23,55]

let newNum = num.filter((item) => {
    item > 5
})

console.log(newNum)
