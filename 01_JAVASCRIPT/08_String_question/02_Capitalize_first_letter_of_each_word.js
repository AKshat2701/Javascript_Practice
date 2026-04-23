

function captilize(s)
{

    let words = s.split(" ")
    
   for(let i = 0 ; i < words.length ; i++)
   {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
   }
   return words.join(" ")
}

console.log(captilize("the quicky brown fox jumps over the lazy dog"))