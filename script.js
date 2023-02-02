const input = document.getElementById("screen-display")
// <input type="test" id="screen-display" value=''/>

//1.  we need to capture the first number
//2.  we need to capture the operator 
//3.  we need to capture the second number
//4. we need function to caculate result
//5. we need function tp clear the result after making the caculation

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

function caculateResult(){
    if(operator === '-'){
        input.value = firstNumber - secondNumber
    }
    if(operator === '/'){
        input.value = firstNumber / secondNumber
    }
    if(operator === '+'){
        input.value = firstNumber + secondNumber
    }
    if(operator === '*'){
        input.value = firstNumber * secondNumber
    }

    // switch (operator){
    //     case '+':
    //         input.value = firstNumber + secondNumber
    //         break
    //     case '/':
    //         firstNumber / secondNumber
    //         break
    //     case '*':
    //         firstNumber * secondNumber
    //         break
    //     case '-':
    //         firstNumber - secondNumber
    //         break
    //     default:
    //         console.log('please provide valid logical operator')
    // }


}

function clearResult(){
    input.value = null
    location.reload()
}

