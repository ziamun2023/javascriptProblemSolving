// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const theCalculator=(num1,num2,operator)=>{
    if(num1&&num2){
        if(operator=='+'){
            return num1+num2
        }
        else if(operator=='-'){
            return num1-num2
        }
        else if(operator=='*'){
            return num1*num2
        }
        else if(operator=='/'){
            return num1/num2
        }

    }
  console.log('enter number')
   
}

console.log(theCalculator(2,2,'/'))