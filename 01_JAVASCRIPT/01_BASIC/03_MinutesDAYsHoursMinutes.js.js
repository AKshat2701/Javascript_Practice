// Convert Minutes to Days, Hours, Minutes

// Problem Statement
// Given total minutes m, convert it into:

// X days, Y hours, Z minutes


// Assume:

// 1 day = 1440 minutes

// 1 hour = 60 minutes

// Example

// Input: 3500
// Output: 2 days, 10 hours, 20 minutes



function minutesToHours(t) {

    const hours = Math.floor(t/1440)

    t = t % 1440
    
    const minutes = Math.floor(t/60)
    
    t = t % 60
    const second = t 
    
    console.log(`${hours} hours, ${minutes} minutes, ${second} seconds`)

}

minutesToHours(8900)