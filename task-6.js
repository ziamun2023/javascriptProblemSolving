// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest=(arr)=>{
    let firstsmallest
    
    let secondSmallest
    
    const findit=arr.reduce((a,b)=>{
        if(a<b){
firstsmallest=a
        }
    })
    const withOutSmallestnum=arr.filter(item=>item!==firstsmallest)
    // console.log(withOutSmallestnum)
    const findit2=withOutSmallestnum.reduce((a,b)=>{
        if(a<b){
            secondSmallest=a
        }
    })
    

return secondSmallest
}


const arr=[1,2,3,4,5,6,7,8]
console.log(findSecondSmallest(arr))