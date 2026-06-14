function memozie(fn)
{
    const cache = {}; 

    return function(arg)
    {
        if(cache[arg] !== undefined)
        {
            console.log("From cache") ; 
            return cache[args] ; 
        }


        console.log("Calculating...") ; 
        const result = fn(arg) ; 
        cache[arg] = result ; 

        return result ; 
    } ; 
}