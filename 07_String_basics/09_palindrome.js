

function checkPalindrom(str)
{

    let rev = ""
    for(let i = 0 ; i < str.length; i++)
    {
        rev = str[i] + rev
    }

    if(rev == str)
    {
        return "palidrom"
    } else 
    {
        return "Not Palindrome"
    }

}




console.log(checkPalindrom("madam"))
console.log(checkPalindrom("RAJU"))