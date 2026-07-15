let arr = [ 1, 2, 3, 4, 5]

let k = 2 ; 
k = k % arr.length

rightRotation(0 , arr.length - 1 )
rightRotation(0 , k - 1 )
rightRotation(k , arr.length - 1 )

console.log(arr)


function rightRotation(i , j )
{
    while( i < j )
    {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp ; 

        i++;
        j-- ; 
    }
}