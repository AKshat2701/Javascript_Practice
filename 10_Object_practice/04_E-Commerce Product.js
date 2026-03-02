

// E-Commerce Product
// Create object:
// id
// title
// price
// discountPercentage
// stock
// calculateFinalPrice()


const cart = 
{
    id : 1,
    title : "boxing gears",
    price : 4000,
    discountPercentage : 30,
    stock : 50,
    finalPrice : function()
    {
        const discountAmount = this.price * (this.discountPercentage /100)
        const NewPrice = this.price - discountAmount
        return NewPrice
    }
}

console.log(cart.finalPrice())
