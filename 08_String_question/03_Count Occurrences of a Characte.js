function Count_Occurance(s, tar)
{
    let count = 0 

    for(let i = 0 ; i < s.length ; i++)
    {
        if(tar == s[i])
        {
            count++
        }
    }
    return count 
}


console.log(Count_Occurance("Bananananan", "a"))