

function rev(s)
{

    rev = ""
    for(let i = 0 ; i< s.length ; i++)
    {
        rev = s[i] + rev
    }
    return rev

}

let str = "Hello world"
console.log(rev(str))