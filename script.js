const input = document.getElementById("screen-display")
// <input type="test" id="screen-display" value=''/>

// input.value = 10 / 2

//1.  we need to capture the first number
//2.  we need to capture the operator 
//3.  we need to capture the second number
let firstNumber = null
let secondNumber = null
let operator = null

function captureNumber(num){
    if(firstNumber === null){
        firstNumber+= num
        console.log('first number is',firstNumber)
        input.value = firstNumber
    }else{
        secondNumber+= num
        console.log('second number is ', secondNumber)
    }
}

function getOperator(sign){
     operator = sign
     console.log('its clicked and operator is ', operator)
    
}

