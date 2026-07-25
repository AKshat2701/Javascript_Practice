let arr1 = [1,3,5]
let arr2 = [2,4,6,8]

let tempArr = new Array(arr1.length + arr2.length)


let i = j = k = 0 ;

while( i < arr1.length && j < arr2.length)
{
    if(arr1[i] < arr2[j])
    {
        tempArr[k] = arr1[i]
        k++ , i++ ; 
    }
    else 
    {
        tempArr[k] = arr2[j]
        k++, j++ ; 
    }
}

while( i < arr1.length)
{
    tempArr[k] = arr1[i]
    k++, i++ ;
}

while( j < arr2.length)
{
    tempArr[k] = arr2[j]
    k++ , j++ ;
}

console.log(tempArr)
