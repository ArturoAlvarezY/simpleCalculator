

const letsOperate=(n1, n2, operator)=>{

    let result='';

   if (isNaN(n1) || isNaN(n2)){
    return 'is not a number'
   }
    
   if (operator === !['+, -, /, *']) {
    return 'You dont set any validate operator, i just accept +, -, /, *'
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

const makingMyCalc= letsOperate(4, 3, '*')

console.log(makingMyCalc);