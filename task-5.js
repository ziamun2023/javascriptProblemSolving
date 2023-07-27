// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// const objet={"apple":2,'ball':3}
// console.log(objet)
//  objet['apple']=10
//  console.log(objet)

const checkFrequency=(arr)=>{
 let mostFrequent=0
 const freq={}
 let result

for (const char of arr){
    freq[char]=(freq[char] || 0)+1
    if(freq[char]>mostFrequent){
        mostFrequent=freq[char]
        result=char
    }
  
}


return result

}
const arr=[1,2,3,3,4,3,4,5,6]

console.log(checkFrequency(arr))