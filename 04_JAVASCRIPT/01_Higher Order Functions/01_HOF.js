// function x()
// {
//     console.log("Hello")
// }

// function y(x)
// {
//     x()
// }

// y(x)



// const radius = [4,2,5,1,6]

// const area = function(radius)
// {
//     return Math.PI * radius * radius
// }

// console.log(area(radius))

// const calculateArea = function(radius)
// {
//     const op = []

//     for(let item of radius)
//     {
//         op.push(Math.PI * item * item)
//     }
//     return op
// }

// console.log(calculateArea(radius))

// console.log()

// const calculateDiameter = function(radius)
// {
//     const op = []
//     for(let item of radius)
//     {
//         op.push(2 * item )
//     }
//     return op 
// }

// console.log("The diameter ", calculateDiameter(radius))
// console.log()

// const calculateCircumfernce = function(radius)
// {
//     const op = []
//     for(let item of radius)
//     {
//         op.push(2 * Math.PI * item)
//     }
//     return op
// }

// console.log("The circumfrence -> ",calculateCircumfernce(radius))


const radius = [32,55,6,23,2]

// const calculate = function(radius, logic)
// {
//     let op = []
//     for(let item of radius)
//     {
//         op.push(logic(item))
//     }
//     return op ; 
// }





// const calculate = function(radius,logic)
// {
//     let op = []
//     for(let item of radius )
//     {
//         op.push(logic(item))
//     }
//     return op 

// }

// const area = function(radius)
// {
//     return Math.PI * radius * radius 
// }

// const circumfrence = function(radius)
// {
//     return 2 * Math.PI * radius ;
// }

// const diameter = function(radius)
// {
//     return 2 * radius 
// }


// console.log(calculate(radius, area))
// console.log(calculate(radius, circumfrence))
// console.log(calculate(radius, diameter))



function greet()
{
    console.log("Hello")
}

greet.language = "JS"
console.log(greet.language)

console.log(greet.hasOwnProperty("name"))