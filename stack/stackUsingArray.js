class Stack {
    constructor(size){
        this.size = size;
        this.array = new Array(size);
        this.lastUsedIndex = -1;
    }

    push(data){
        if(this.lastUsedIndex != this.size-1){
            this.array[this.lastUsedIndex+1] = data;
            this.lastUsedIndex ++ ;
        } else {
            console.log("Stack Overflow: cant insert data "+data );
        }
    }

    pop(){
        if(this.lastUsedIndex != -1){
            let data = this.array[this.lastUsedIndex];
            this.lastUsedIndex --;
            return data;
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
