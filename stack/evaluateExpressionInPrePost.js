let postFixExpression = "231*+9-"
let stack = [];

function operation(element1, element2, operator){
    switch(operator){
        case '+' : return element1 + element2;
        case '-' : return element1 - element2;
        case '*' : return element1 * element2;
        case '/' : return element1 / element2;
    }
}
for(let i=0; i<postFixExpression.length; i++){
        if(postFixExpression.charCodeAt(i)>=48 && postFixExpression.charCodeAt(i)<=57){
            stack.push(Number(postFixExpression[i]));
            console.log(stack);
        } else {
            let result = operation(stack.pop(), stack.pop(), postFixExpression[i])
            stack.push(result);
            console.log(stack);
        }
}

console.log(stack.pop());