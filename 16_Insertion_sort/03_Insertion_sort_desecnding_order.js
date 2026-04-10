const descendingInsertion = (arr) =>
{
    for(let i = 1 ; i < arr.length ; i++)
    {
        let curr = arr[i]
        let j = i - 1 ;

        while( j >= 0 && arr[j] <  curr) //if j value "<" is less we move it back 
        {
            arr[ j + 1] = arr[j] ; 
            j--
        }
        arr[j + 1 ] = curr
    }
    return arr ; 
}


console.log(descendingInsertion([943,56,34,2, 6,34, 6342,68]))