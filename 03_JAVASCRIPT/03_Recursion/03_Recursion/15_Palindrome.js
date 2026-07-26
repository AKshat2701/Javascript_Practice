function check(str)
{
    function helper(str, s , e)
    {
        if(s >= e)
        {
            return true; 
        }

        if(str[s] != str[e])
        {
            return false ;
        }

        return helper(str, s + 1 , e - 1)
    }

    return helper(str, 0, str.length - 1 )
}

console.log(check("NAMAN"))