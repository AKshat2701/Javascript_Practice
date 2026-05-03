function checkPalindrome(str, left, right)
{

    
    if(left >= right) return true ; 

    if(str[left] !== str[right]) return false

    return checkPalindrome(str, left + 1 , right -1 )
}

console.log(checkPalindrome("madam", 0 , "madam".length - 1))