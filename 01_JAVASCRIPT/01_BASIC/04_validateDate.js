// Valid Date
// Determine whether a given calendar date is valid or invalid.

// Rules
// Month must be between 1 and 12.

// Day must fit the month and year:

// 31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

// 30-day months: April, June, September, November (4, 6, 9, 11)

// February (2)

// 29 days in a leap year
// 28 days otherwise
// Leap year criteria

// Divisible by 4 and not divisible by 100, unless also divisible by 400

function isLeapYear(year)
{
    return (year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0);
}


function isValidDate(day, month, year)
{
    if(month < 1 || month > 12)
    {
        return false;
    }

    let maxDays ;

    if([1,3,5,7,8,10,12].includes(month)) {
        maxDays = 31
    } else if ([4,6,9,11].includes(month))
    {
        maxDays = 30
    }else {
        maxDays = isLeapYear(year) ? 29 : 28
    }


    if (day < 1 || day > maxDays){
        return false;
    }
    return true;
}


console.log(isValidDate(21,2,2024))
console.log(isValidDate(32,3,2023))
console.log(isValidDate(31,3,2023))