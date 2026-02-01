

function isLeapYear(year)
{
    return (year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0)
}


function getDaysMonth(month, year)
{
    if([1,3,5,7,8,10,12].includes(month)){
        return 31
    } else if ([4,6,9,11].includes(month)) return 30

    return isLeapYear(year) ? 29 : 28 ;
}

function nextDate(day, month, year){
    const maxDay = getDaysMonth(month, year) ;

    if(day < maxDay){
        day ++ 
    } else {
        day = 1 ;
        if (month < 12){
            month++;
        } else {
            month = 1 ;
            year++
        }
    } 
    console.log(`${day} ${month} ${year}`)

}

nextDate(23,3,2024)