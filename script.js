
const arrayInput = {
    list:[],
    nbr1: [],
    op: "",
    op2: "",
    nbr2: [],
    nbr3:[],
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
    nbr1 = Math.floor(Number(nbr1));
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
           return divide(nbr1,nbr2);
            
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

    switch (this.value){
        case "+":
            clearDots(inputs);

            if(inputs.nbr1 == ""){
                inputs.op = this.value;
                inputs.nbr1 = inputs.list;  
            }
            else{
                inputs.op2 = this.value;
                inputs.nbr2 = inputs.list; 
            }

            del(inputs);

            break;
        case "-":
            clearDots(inputs);

            if(inputs.nbr1 == ""){
                inputs.op = this.value;
                inputs.nbr1 = inputs.list;  
            }
            else{
                inputs.op2 = this.value;
                inputs.nbr2 = inputs.list;

            }

            del(inputs);

            break;
        case "*":
            clearDots(inputs);

            if(inputs.nbr1 == ""){
                inputs.op = this.value;
                inputs.nbr1 = inputs.list;
            }
            else{
                inputs.op2 = this.value;
                inputs.nbr2 = inputs.list;
            }  

            del(inputs);

            break;
        case "/":
            clearDots(inputs);

            if(inputs.nbr1 == ""){
                inputs.op = this.value;
                inputs.nbr1 = inputs.list;  
            }
            else{
                inputs.op2 = this.value;
                inputs.nbr2 = inputs.list; 
            }

            del(inputs);

            break;
        case "":
            clear(inputs);
            display.value = inputs.list;
            
            break;
        case "erase":
            erase(inputs);
            inputs = inputs.list.join("");
            display.value = inputs;

            break;
        case "=":
            if(inputs.list.length === 0){
                let error = "ERROR";
                display.style.color = "red";

                return display.value = error;
            }
            else if(inputs.nbr1.length !== 0 && inputs.nbr2.length !== 0){
                inputs.nbr3 = inputs.list;
                
                let firstNbr = inputs.nbr1.join("");
                let secondNbr = inputs.nbr2.join("");
                let thirdNbr = inputs.nbr3.join("");
                
                if(inputs.op === "/" && inputs.nbr1 == 0||
                    inputs.op === "/" && inputs.nbr2 == 0||
                    inputs.op === "/" && inputs.nbr3 == 0){

                    let error = "Divide by 0? You monster..";
                    display.style.color = "red";
                    return display.value = error;
                }

                let calcul = operate(firstNbr, inputs.op, secondNbr);
                inputs.nbr1 = calcul ;
                
                let result = operate(calcul, inputs.op2,thirdNbr);
                display.value = result;
                clear(inputs);
                
            }
            else{
                inputs.nbr2 = inputs.list;  

                if(inputs.op === "/" && inputs.nbr1 == 0||
                    inputs.op ==="/" && inputs.nbr2 == 0){

                    let error = "Divide by 0? You monster..";
                    display.style.color = "red";
                    clear(inputs);
                    return display.value = error;
                }
                else{
                    let firstNbr = inputs.nbr1.join("");
                    let secondNbr = inputs.nbr2.join("");
                    
                    let calcul = operate(firstNbr, inputs.op, secondNbr);
                    
                    display.value = calcul;
                    del(inputs);
                }

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

            inputs = inputs.list.join("");
            display.value = inputs;
    }

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
    return arrayI;
}