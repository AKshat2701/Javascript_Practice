const arr1 = [1,2,5,61,70]
const arr2 = [1, 3, 6, 10,12]

console.log(merge(arr1, arr2))


function merge(leftArr, rightArr)
{
    const newArr = [] 

    let i = 0 ; 
    let j = 0 ; 

    while(i < arr1.length && j < arr2.length)
    {
        if(arr1[i] < arr2[j])
        {
            newArr.push(leftArr[i])
            i++ ; 
        }
        else 
        {
            newArr.push(arr2[j])
            j++ ; 
        }
    }

    for(let left = i ; left < arr1.length ; left++)
    {
        newArr.push(leftArr[left]);
    }

    for(let right = j ; right < arr2.length ; right++)
    {
        newArr.push(rightArr[right]) ; 
    }

    return newArr ; 
}