function conquor(arr, first, mid ,last)    //O(n) ; 
{
    let temp = new Array(last - first + 1 )

    let i = first ; 
    let j = mid + 1 ; 
    let k = 0 ; 

    while(i <= mid && j <= last)
    {
        if(arr[i] < arr[j])
        {
            temp[k] = arr[i]
            k++ ;
            i++ ; 
        }
        else 
        {
            temp[k] = arr[j]
            k++ 
            j++ ; 
        }
    }

    while(i <= mid)
    {
        temp[k] = arr[i]
        k++ , i++ ; 
    }

    while(j <= last)
    {
        temp[k] = arr[j]
        k++ ; 
        j++ ; 
    }


    let p = 0 ; 
    let t = first ; 

    while(p < temp.length)
    {
        arr[t] = temp[p] ; 
        t++;
        p++; 
    }
      
}


function divide(arr , first , last ) //Log(n)
{

    if(first >= last) return ; 

    let mid = Math.floor((first + last )/2) ; 

    divide(arr , first , mid  ) ;    //Log(n)
    divide(arr, mid + 1 , last ) ;   //Log(n)

    conquor(arr, first , mid , last ) ; 
}


let arr = [8, 2 ,1 ,9 , 5 , 12, 4, 20 ] ; 
divide(arr, 0 , arr.length - 1 )      //n*log(n)
console.log(arr) ; 

