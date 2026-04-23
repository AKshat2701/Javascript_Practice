// finding minimum in an array 

const arr = [ 12,44,9,54,374,43,23,1,95]

let mini = arr[0]

for (let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] < mini)
    {
        mini = arr[i]
    }
}

console.log(mini)
