function count(num)
{
    
   if(num == 0)
   {
    return 0 ;
   }

   if(num % 10 == 1 )
   {
    return 1 + count(Math.floor(num/10))
   }

   return count(Math.floor(num/10))
   
}


let n = 121121
console.log(count(n))
