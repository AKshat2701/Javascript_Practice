// Model:
// title
// director
// cast (array)
// ratings (array of numbers)
// getAverageRating()



const details = 
{
    title : "Spiderman far from home",  
    director : "Jon Watts",
    cast : 
    [   "Tom Holland ", 
        "Jake Gyllenhaa" , 
        "Samuel L. Jackson", 
        "Marisa Tomei" , 
        "Zendaya "
    ],
    rating : 
    [
        4.6,
        5,
        4.2,
        4.1,
        5
    ],
    averageRating : function()
    {
        const sumofRating= this.rating.reduce((acc, curr) => acc + curr, 0)
        const avgRating = (sumofRating / (this.rating.length))
        return avgRating
    }
}

console.log(details.averageRating())
