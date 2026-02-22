function upper(k)
{

    let result = ""

    for(let i = 0 ; i < k.length ; i++)
    {
        let code = k[i].charCodeAt(0)
        if(code >= 97 && code <= 122)
        {
            result = result + String.fromCharCode(code - 32)
        } else 
        {
            result = result + k[i]
        }
    }

    return result;

}

let s = "hello world"

console.log(upper(s))