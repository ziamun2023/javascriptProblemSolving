// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const SumOfPositiveNum=(numArray)=>{
    const allPositiveNum=numArray.filter((element)=>element%2===0)
    const sumOfPostiveNum=allPositiveNum.reduce((a,b)=>a+b)
    console.log(sumOfPostiveNum)

}
SumOfPositiveNum([2,3,4,5,6,7,8])