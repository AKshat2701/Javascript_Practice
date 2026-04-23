let num = 123321
let temp = num 

let rev = 0 

while( num > 0)
{
    let lastDig = num % 10
    rev = rev * 10 + lastDig
    num = Math.floor(num/10)
}


if (temp === rev)
{
    console.log("Palindrom")
} else {
    console.log("not Palindrome")
}
