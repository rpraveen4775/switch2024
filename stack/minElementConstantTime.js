class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
    }
    push(data){
        this.stack.push(data);
        if(!this.minStack.length || this.minStack[this.minStack.length - 1] > data){
            this.minStack.push(data);
        }
    }
    pop(){
        if(this.stack.length){
            let removedElement = this.stack.pop();
            if(this.minStack.length && this.minStack[this.minStack.length - 1] == removedElement){
                this.minStack.pop();
            }
            return removedElement;
        } else {
            return "Stack is Empty"
        }
    }
    isEmpty(){
        return this.stack.length ? false : true;
    }
    peek(){
        if(!this.stack.length) {
            return "Stack is Empty";
        }
        return this.stack[this.stack.length-1];
    }
    minElement(){
        if(this.minStack.length){
            return this.minStack[this.minStack.length-1];
        } else {
            return "Stack is Empty : No Min Present"
        }
    }
}

let minStack = new MinStack();
minStack.push(10);
minStack.push(14);
minStack.push(15);
minStack.push(13);
minStack.push(3);
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());
console.log("Removing ",minStack.pop());
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());
console.log("Removing ",minStack.pop());
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());
console.log("Removing ",minStack.pop());
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());
minStack.push(5);
minStack.push(3);
console.log("Removing ",minStack.pop());
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());
console.log("Removing ",minStack.pop());
console.log("Removing ",minStack.pop());
console.log("Removing ",minStack.pop());
console.log("Removing ",minStack.pop());
console.log("Removing ",minStack.pop());
console.log("Removing ",minStack.pop());
console.log("Top Element of Stack",minStack.peek());
console.log("Min Element",minStack.minElement());



