class InfixToPostfix {
    constructor(){
        this.postfixExpression ='';
        this.operatorStack = [];
    }
    isOperand(expression, i){
        return (expression.charCodeAt(i) >= 97 &&  expression.charCodeAt(i) <= 122) ? true : false;
    }
    isExpRightAssociative(expression, i){
        //‘^‘ operator is right associative and other operators like ‘+‘,’–‘,’*‘ and ‘/‘ are left-associative
        if (expression[i] == '^') {
            return true;
        } else {
            return false;
        }
    }
    top(){
        return this.operatorStack[this.operatorStack.length - 1 ];
    }
    precedence(character){
        switch(character){
            case '+' : return 1;
            case '-' : return 1;
            case '*' : return 3;
            case '/' : return 3;
            case '^' : return 5;
        }        
    }
    convert(exp){
        //Consider the infix expression exp = “a+b*c+d”
        for(let i=0;i<exp.length;i++){
            // if operand , Append to postfix Expression
            if (this.isOperand(exp,i)){ 
                this.postfixExpression+=exp[i];
                console.log(this.postfixExpression)
            } else { // if character is operator 
                // consideration of precedence and associativity of operator
                if(this.operatorStack.length == 0 || exp[i] == '(' ){
                    this.operatorStack.push(exp[i]);
                } else if(exp[i]== ')'){
                    let top = this.operatorStack.pop();
                    while(this.operatorStack.length && top !='('){
                        this.postfixExpression+=top;
                    }
                } else {
                    while( (this.precedence(exp[i]) < this.precedence(this.top) ) || 
                        ((this.precedence(exp[i]) ==  this.precedence(this.top)) && !this.isExpRightAssociative(exp,i))){
                            this.postfixExpression+=this.operatorStack.pop();
                    }
                    this.operatorStack.push(exp[i]);
                }
            }
            console.log("operator stack ", this.operatorStack);

        }
        console.log(" --- final  --- operator stack ", this.operatorStack);
        while(this.operatorStack.length){
            this.postfixExpression+=this.operatorStack.pop();
        }
    }
}


let object = new InfixToPostfix();
object.convert("a+b*c+d");
console.log(object.postfixExpression);


/*
Scan the infix expression from left to right. 
If the scanned character is an operand, put it in the postfix expression. 
Otherwise, do the following
If the precedence and associativity of the scanned operator are greater than the precedence and associativity of the operator
in the stack [or the stack is empty or the stack contains a ‘(‘ ], then push it in the stack. 
[‘^‘ operator is right associative and other operators like ‘+‘,’–‘,’*‘ and ‘/‘ are left-associative].
Check especially for a condition when the operator at the top of the stack and the scanned operator both are ‘^‘. 
In this condition, the precedence of the scanned operator is higher due to its right associativity. 
So it will be pushed into the operator stack. 
In all the other cases when the top of the operator stack is the same as the scanned operator, 
then pop the operator from the stack because of left associativity due to which the scanned operator has less precedence. 
Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator.
After doing that Push the scanned operator to the stack.
 (If you encounter parenthesis while popping then stop there and push the scanned operator in the stack.) 
If the scanned character is a ‘(‘, push it to the stack. 
If the scanned character is a ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 
Repeat steps 2-5 until the infix expression is scanned. 
Once the scanning is over, Pop the stack and add the operators in the postfix expression until it is not empty.
Finally, print the postfix expression.
*/