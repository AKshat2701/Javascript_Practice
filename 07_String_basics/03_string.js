

// let arr = [1,2,3,4,5]

// console.log(arr[2])


// let s = "sjreajf"

// s = s + "world"
// console.log(s)


// let s = "akshat"
// s = s + " Srivastava"
// console.log(s)


// let s = "Akshat Srivastava  "
// console.log(s.length)

// console.log(s.slice(2, 5))
// console.log(s)
// console.log(s.slice(-4, s.length))

// console.log(s.substring(2,9))
// console.log(s)

// console.log(s.concat(" ", " Web developer "))


// console.log(s.trim())
// console.log(s.indexOf("a"))

// console.log(s.charAt(2))
// console.log(s.charCodeAt(2))

// for(let i = 0 ; i < s.length ; i++)
// {
//     console.log(s[i])
// }

// for(let i = 0 ; i < s.length ; i++)
// {
//     console.log(s.charCodeAt(i))
// }


// for(let i = s.length - 1 ; i > 0 ; i--)
// {
//     console.log(s[i])
// }

let s = "akshat"

let rev = ""

for(let i = 0 ; i< s.length ; i++)
{
    rev =  s[i] + rev
}

if(rev == s)
{
    console.log("palidrome")
}else{
    console.log("Not palidrome")
}
