let num1 = null;
let num2 = null;
let operator = null;

const buttons = document.querySelectorAll(".button.num");
const operations = document.querySelectorAll(".button.op");
const display = document.querySelector(".answer");
const equal = document.querySelector(".equal");

//console.log(buttons.length);

for (let button of buttons) {
    
    button.addEventListener("click", () => {
        //console.log(num1);
        if (num1 === null) {
            display.textContent = button.textContent;
            num1 = Number(button.textContent);
        } else if(num1 !== null && operator === null) {
            display.textContent = display.textContent + button.textContent;
            num1 = Number(display.textContent);
        } else if(operator !== null && num2 === null) {
            display.textContent = button.textContent;
            num2 = Number(display.textContent);
        } else if (num2 !== null) {
            display.textContent = display.textContent + button.textContent;
            num2 = Number(display.textContent);
        }
    });
}

for(let op of operations) {
    op.addEventListener("click", () => {
        if (num1 !== null && num2 === null) {
            num1 = Number(display.textContent);
            operator = op.textContent;
        } else if (num1 !== null && num2 !== null) {
            console.log(num1);
            console.log(num2);
            console.log(operator);
            let result = operate(num1, num2, operator);
            display.textContent = String(result);
            //num1 = result;
            if (result !== "DivBy0ERR") {
                operator = op.textContent;
            }
            
            console.log(num1);
            console.log(num2);
            console.log(operator);
            //num2 = null;
        }
    })
}

equal.addEventListener("click", () => {
    if (num2 !== null) {
        console.log(num1);
            console.log(num2);
            console.log(operator);
        let result = operate(num1, num2, operator);
        display.textContent = String(result);
        console.log(num1);
            console.log(num2);
            console.log(operator);
        //num1 = result;
        //num2 = null;
    }
});


function operate(number1, number2, operation) {
   
    if (operation === '*') {
        num1 = number1 * number2
        operator = null;
        num2 = null;
        return num1;
    } else if ( operation === '+') {
        num1 = number1 + number2
        operator = null;
        num2 = null;
        return num1;
    } else if (operation === '-') {
        num1 = number1 * number2
        operator = null;
        num2 = null;
        return num1;
    } else if (operation === '/') {
        if(num2 == 0) {
            num1 = null;
            operator = null;
            num2 = null;
            result = "DivBy0ERR"
        } else {
            num1 = number1 / number2
            operator = null;
            num2 = null;
        return num1;
        }
        
    }
}