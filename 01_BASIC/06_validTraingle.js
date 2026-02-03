function validTraingle (a, b , c)
{

    if (a <= 0 || b <= 0 || c <= 0){
        return "Invalid input"
    }
    if ((a + b > c) && (b + c > a) && (a + c > b) ){
        return "validTriangle"
    } else {
        return "Invalid"
    }
}


console.log(validTraingle(43,42,33))
