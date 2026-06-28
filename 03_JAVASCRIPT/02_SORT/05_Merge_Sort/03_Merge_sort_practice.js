function merge(arr, first, mid, last)
{
    let tempArr = new Array(last - first + 1)

    let i = first;
    let j = mid + 1 ;

    let k = 0 ; 

    while(i <= mid && j <= last)
    {
        if(arr[i] < arr[j])
        {
            tempArr[k++] = arr[i++]
        }
        else 
        {
            tempArr[k++] = arr[j++]
        }
    }

    while(i <= mid)
    {
        tempArr[k] = arr[i]
        k++, i++; 
    }

    while(j <= last)
    {
        tempArr[k] = arr[j]
        k++, j++ ;
    }

    let p = 0 ;
    let t = first ;

    while(p < tempArr.length)
    {
        arr[t] = tempArr[p]
        t++ , p++ ; 
    }
}

function divide(arr, first, last)
{
    if(first >= last) return ; 

    let mid = Math.floor((first+last)/2 )

    divide(arr, first, mid)
    divide(arr, mid + 1, last)

    merge(arr, first,mid ,last)

}

let arr = [32,85,75,9,5,3,8,36,7,6,5,4,3,]

divide(arr, 0 , arr.length - 1 )

console.log(arr)
