

function countVovels(str)
{

    let vovel = "aeiou"
    let count = 0

    for(let item of str.toLowerCase())
    {

        if(vovel.includes(item))
        {
            count++
        }
    }

    return count
}

console.log(countVovels("This is javascript"))
