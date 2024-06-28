const number= document.querySelectorAll('.number');
const operator= document.querySelectorAll('.operator');
const equal= document.getElementById('equal');
const screen= document.getElementById('screen');

//Making useful the number buttons  

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';

number.forEach(button => {
    button.addEventListener("click", ()=>{
        if (currentOperator === '') {
            firstNumber += button.textContent;
            screen.innerHTML = firstNumber;
        } else {
            secondNumber += button.textContent;
            screen.innerHTML = firstNumber + currentOperator + secondNumber;
        }
    })
});

const letsOperate=(n1, n2, operator)=>{

    let result='';

   if (isNaN(n1) || isNaN(n2)){
    return 'is not a number'
   }
    
   if (operator === !['+, -, /, *']) {
    return 'You dont set any validate operator, i just accept +, -, /, *';
   } 
    
   if(operator === '+'){
    result= `${n1 + n2}`
   }
   else if(operator === '-'){
    result= `${n1 - n2}`
   }
   else if(operator === '*'){
    result= `${n1 * n2}`
    }
    else if(operator === '/'){
    result= `${n1 / n2}`
    }

    return result;
}

//making my operators to be clickeable!

operator.forEach(op =>{
    op.addEventListener("click", ()=>{
        if (firstNumber === '') return;
        if (secondNumber !== '') {
            firstNumber = letsOperate(Number(firstNumber), Number(secondNumber), currentOperator);
            secondNumber = '';
        }
        currentOperator = op.textContent;
        screen.innerHTML = firstNumber + currentOperator;
    });
});

//Making Functional my equal button 

equal.addEventListener("click", () => {
    if (firstNumber === '' || secondNumber === '' || currentOperator === '') return;
    const result = letsOperate(Number(firstNumber), Number(secondNumber), currentOperator);
    screen.innerHTML = result;
    firstNumber = result;
    secondNumber = '';
    currentOperator = '';
});

const valuesToMyCalc= letsOperate(5, 7, "*")

console.log(valuesToMyCalc);