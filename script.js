
const arrayInput = {
    list:[],
    nbr1: [],
    op: "",
    nbr2: [],
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
           return divide(nbr1,nbr2);
            
    }

}

const display = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", addToDisplay); 
    
});


function addToDisplay() {
    let inputs = arrayInput;
    switch (this.value){
        case "":
            del(inputs);
            display.value = inputs.list;
            // console.log("bouton: "+ inputs.list); 
            break;
        case "=":
            fillObject(inputs);

            let firstNbr = inputs.nbr1.join("");
            let secondNbr = inputs.nbr2.join("");
            /* console.log("num1 = " + firstNbr);
            console.log("num2 = " + secondNbr); */
    
            let calcul = operate(firstNbr, inputs.op, secondNbr);
            console.log("resultat calcul= " + calcul);
            display.value = calcul;
            del(inputs);
            break;
        default:
            inputs.list.push(this.value);
            inputs = inputs.list.join("");
            display.value = inputs;     
            // console.log("bouton: "+ inputs); 
    }


}

function fillObject(arrayInput){
    for (let i = 0; i < arrayInput.list.length; i++) {
        if(arrayInput.list[i] === "+" || arrayInput.list[i] === "-" 
        || arrayInput.list[i] === "*" || arrayInput.list[i] === "/"){
            //isole l'opérateur
            arrayInput.op = arrayInput.list[i];
            console.log("opérateur: " + arrayInput.op);

            //isole le nombre 1
            let cut1 = arrayInput.list.slice(0,i);
            
            arrayInput.nbr1 = cut1;
            console.log("nbr1: " + arrayInput.nbr1, cut1);
            
            //isole le nombre 2
            let cut2 = arrayInput.list.slice(i + 1);
            
            arrayInput.nbr2 = cut2;
            console.log("nbr2: " + arrayInput.nbr2);

            return true;
        }

    }
    return false;
}

function del(arrayI){
    let del = arrayI.list = [];
    return del;
}