
 /*    add
    subtract
    multiply
    divide */
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
console.log(operate(1,"/",2));

const display = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", addToDisplay);  
});

function addToDisplay(){
    display.value = this.value;
    console.log("display: "+ display.value);
    console.log("bouton: "+ this.value);
}