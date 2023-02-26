
const arrayInput = {
    list:[],
    nbr1: null,
    op: "",
    nbr2: null,
    countDot: 0
};

function add(nbr1, nbr2 = 0){
    return nbr1 + nbr2;
}

function substract(nbr1, nbr2 = 0){
    return nbr1  - nbr2;
}

function multiply(nbr1, nbr2 = 0){
    return nbr1 * nbr2;
}

function divide(nbr1, nbr2 = 0){
    return nbr1 / nbr2;
}

function operate(nbr1,op,nbr2){
    nbr1 = Number(nbr1);
    nbr2 = Number(nbr2);
    switch (op) {
        case "+":
            console.log(nbr1,op, nbr2);
            return add(nbr1,nbr2);
        case "-":
            console.log(nbr1,op, nbr2);
            return substract(nbr1,nbr2);
            
        case "*":
            console.log(nbr1,op, nbr2);
            return multiply(nbr1,nbr2);
            
        case "/":
            console.log(nbr1,op, nbr2);
           return Math.floor(divide(nbr1,nbr2));
            
    }

}

const display = document.querySelector("#input");
const nbrButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const dots = document.querySelector("#dot");
const disabled = document.createAttribute("disabled");

nbrButtons.forEach(button => {
    button.addEventListener("click", addToDisplay);   
});

opButtons.forEach(button => {
    button.addEventListener("click", addToDisplay);
});

clearBtn.addEventListener("click", addToDisplay);
eraseBtn.addEventListener("click", addToDisplay);

function addToDisplay() {
    let inputs = arrayInput;
    let number = Number(inputs.list.join(""));
    
    switch (this.value){
        case "+":
        case "-":
        case "*":
        case "/":
            clearDots(inputs);
            if(inputs.nbr1 == null){
                inputs.nbr1 = number; 
            }
            else{
                inputs.nbr2 = number;
            } 
            
            if(inputs.nbr1 !== null && inputs.nbr2 !== null) {
                
                let calcul = calculate();
                
                display.value = calcul; 
            }

            inputs.op = this.value;
            
            del(inputs);

            break;
        case "":
            clear(inputs);

            display.value = inputs.list;
            
            break;
        case "erase":
            erase(inputs);
            
            display.value = inputs.list.join("");

            break;
        case "=":

            if(inputs.list.length === 0){
                let error = "ERROR";
                display.style.color = "red";

                return display.value = error;
            }
            else{
                
                inputs.nbr2 = number;  

                let calcul = calculate();

                display.value = calcul;
                del(inputs);
            }
            break;
        default:
            inputs.list.push(this.value);

            if(this.value === "."){
                inputs.countDot ++ ;
                if(inputs.countDot >= 1){
                    disabled.value = "true";
                    dots.style.backgroundColor = "#ded8d8";
                    dots.setAttributeNode(disabled);
                }
            }

            display.value = inputs.list.join("");
    }

}

function calculate(firstNbr, operator, secondNbr){
    firstNbr = arrayInput.nbr1;
    secondNbr = arrayInput.nbr2;
    operator = arrayInput.op;

    if(operator === "/" && secondNbr == 0){
        let error = "Divide by 0? You monster..";
        display.style.color = "red";
        secondNbr = [];
        return error;
    }
    
    let result = operate(firstNbr, operator, secondNbr);
    arrayInput.nbr1 = result;

    return result;

}

function del(arrayI){
    arrayI.list = [];

    return arrayI;
}

function clearDots(arrayI){
    arrayI.countDot = 0;

    dots.style.backgroundColor = "";
    dots.removeAttribute("disabled");
}

function clear(arrayI){
   arrayI.list = [];
   arrayI.nbr1 =[];
   arrayI.nbr2 = [];
   arrayI.nbr3 = [];

   display.style.color = "";
    clearDots(arrayI);

    return arrayI;
}

function erase(arrayI){
    arrayI = arrayI.list.pop();

    if (arrayI === ".") {
        clearDots(arrayI); 
    }

    return arrayI;
}