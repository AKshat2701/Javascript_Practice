let arr1 = [ 2, 5, 6]
let arr2 = [ 1, 3,4, 8]


let tempArr = new Array(arr1.length + arr2.length )

let i = j = k = 0 ; 

while(i < arr1.length && j < arr2.length)
{
    if(arr1[i] < arr2[j])
    {
        tempArr[k] = arr1[i]
        i++ ; 
        k++ ; 
    }
    else 
    {
        tempArr[k] = arr2[j]
        k++, j++ ; 
    }
}

while( i < arr1.length)
{
    tempArr[k++] = arr1[i++]
}
while( j < arr2.length)
{
    tempArr[k++] = arr2[j++]
}

console.log(tempArr)
