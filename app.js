/*
number
operator
#equal
#screen
*/

const number= document.querySelectorAll('.number');
const operator= document.querySelectorAll('.operator');
const equal= document.getElementById('equal');
const screen= document.getElementById('screen');

//Making useful the number buttons  

number.forEach(button => {
    button.addEventListener("click", ()=>{
        let makeNumber= Number(button.textContent);
        return screen.innerHTML += makeNumber;
    })
});

//