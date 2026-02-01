// Given total seconds s, convert it into:

// X hours, Y minutes, Z seconds


// Assume:

// 1 hour = 3600 seconds

// 1 minute = 60 seconds

// Input
// A single integer s (1 ≤ s ≤ 100000)



function secondTohour(t) {
    const hour = Math.floor(t / 3600)
    t = t % 3600
    
    const min = Math.floor(t / 60)


    t = t % 60

    const sec = t 
    console.log(`${hour} hours , ${min} minutes , ${sec} seconds`)

}

secondTohour(7600)
secondTohour(8900)
