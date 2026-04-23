


const order =
{
    orderID : 101,

    customer :
    {
        name : "Akshat",
        city : "allahabad"
    },

    items :
    [
        {
            productName : "Laptop",
            quantity : 1 ,
            price : 60000
        },
        {
            productName : "Mouse",
            quantity : 1,
            price : 890
        },
        {
            productName : "Keyboard",
            quantity : 1,
            price : 1500
        }
    ],

    calculateAmount()
    {
        let total = 0 
        for(let item of this.items)
        {
            total = total + item.quantity * item.price
        }
        return total ;
    }
}

console.log(order.calculateAmount())
