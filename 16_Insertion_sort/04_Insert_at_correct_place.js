const insertElem = (arr, target) =>
{
   
    arr.push(target) ; 

    let curr = target ; 

    let j = arr.length - 2 ; 

    while( j >= 0 && arr[j] > curr)
    {
        arr[j + 1 ] = arr[j]
        j--;
    }

    arr[j + 1] = curr
    return arr ; 

}

console.log(insertElem([1,3, 5, 6] , 4))
