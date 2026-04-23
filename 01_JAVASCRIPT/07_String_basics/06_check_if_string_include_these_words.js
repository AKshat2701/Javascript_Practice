//method - 1 
function check(str, t)
{
let words = str.split(" ")
   for(let word of words)
   {
    if(word = t)
    {
        return "VALID"
    }
   }
   return "NOT VALID"
}

let s = "the quicky brown fox jumps over the lazy dog"
let target = "the"
console.log(check(s, target))


// method 2 
function checking(str , t)
{
    return str.includes(t) ? "valid" : "not valid"
}


console.log(checking("This is javascript", "z"))

