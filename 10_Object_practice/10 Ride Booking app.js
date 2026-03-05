

const details =
{
    drive : 
    {
        drivername : "raju driver",
        rating : 4.5,
        carname : "WagonR"
    },
    passenger :
    {
        passengername : "Hero alom",
        passengerage : 43
    },
    pickuplocation : "park ultima sitapur road",

    droplocation : "charbhag railway station",

    fareperkm : 9.1 ,

    distanceinKm : 30 ,

    startRide()
    {
        const fare = this.calculateFare()
        console.log(`The Ride is started and the fare is ${fare}`)
    },

    endRide()
    {
        console.log(`You've reached the distination`)
    },

    calculateFare()
    {       
        console.log("Total fare cost is")
        return this.fareperkm * this.distanceinKm
    }
}


console.log(details)

console.log(details.calculateFare())

details.startRide()
details.endRide()

