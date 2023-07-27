
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseIt=(string)=>{
    let reversed=''
    for(let i=string.length -1; i>=0;i--){
     reversed=reversed+string[i]
    }
    return reversed
}
console.log(reverseIt('hellow'))