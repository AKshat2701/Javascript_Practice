let arr = 
[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

var spiralOrder = function(arr)
{
    let m = arr.length ;  
    let n = arr[0].length ;  

    let startRow = 0 ;
    let startCol = 0 ; 
    let endRow = m - 1 ;    
    let endCol = n - 1 ; 

    const ans = [] 

    while(startRow <= endRow && startCol <= endCol)
    {
        // top
        for(let j = startCol ; j <= endCol ; j++)
        {
            ans.push(arr[startRow][j])
        }

        // right
        for(let i = startRow + 1 ; i <= endRow ; i++)
        {
            ans.push(arr[i][endCol])
        }

        // bottom
        if(startRow < endRow)
        {
            for(let j = endCol - 1 ; j >= startCol ; j--)
            {
                ans.push(arr[endRow][j])
            }
        }

        // left
        if(startCol < endCol)
        {
            for(let i = endRow - 1 ; i > startRow ; i--)
            {
                ans.push(arr[i][startCol])
            }
        }

        startRow++;
        endRow-- ; 
        startCol++ ; 
        endCol--;
    }

    return ans 
}

console.log(spiralOrder(arr))