class Stack {
    constructor(size){
        this.size = size;
        this.array = [];
    }

    push(data){
        if(this.array.length < this.size ){
            this.array.push(data);
        } else {
            console.log("Stack Overflow: cant insert data "+data );
        }
    }

    pop(){
        if(this.array.length){
            return this.array.pop();
        } else {
            console.log("Stack is Empty");
        }
    }
}

let stack = new Stack(10);

stack.push(1);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);stack.push(2);stack.push(2);stack.push(2);stack.push(2);stack.push(2);stack.push(2);stack.push(2);


console.log(stack.pop());
console.log(stack.pop());console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
