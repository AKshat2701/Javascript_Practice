//Lexical scoping 

// function outer()
// {
//     let username = "Akshat"

//     function inner()
//     {
//         let secret = "123"
//         console.log("Inner -> ",username)
//     }

//     function innerTwo()
//     {
//         console.log("Inner two -> " , username )
//     }

//     inner() ; 
//     innerTwo() ; 

// }

// outer() 




function makeFunc()
{
    const name = "Mozilla" ; 

    function displayName()
    {
        console.log(name)
    }

    return displayName
}

const displaying = makeFunc() ;
displaying() ; 