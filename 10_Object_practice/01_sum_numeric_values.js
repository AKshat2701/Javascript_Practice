

const obj = 
{
    a : 10,
    b : 11,
    c : 12,
    d : 13,
    e : "hello",
    f : true,
    g : 90
}

let sum = 0 ;

for(let key in obj)
{
    if(typeof obj[key] === "number")
    {
        sum = sum + obj[key]
    }
}
console.log(sum)
