// Convert Days to Years, Months, and Days Problem Statement Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume: 
// 1 year = 365 days 
// 1 month = 30 days 
// Input A single integer d (1 ≤ d ≤ 10000) representing the number of days. Output Print the result in the format: X years, Y months, Z days




function convertDays(d)
{
    const years = Math.floor(d/365)
    
    d = d % 365
    
    
    const month = Math.floor(d/30)
    d = d % 30
    
    const day = d ;

    console.log(`${years} years , ${month} months , ${day} days`)
    
}

convertDays(1000)
convertDays(700)
convertDays(1)