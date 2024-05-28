class Stack {
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
        this.lastElement = null;
    }
    pop(){
        if(this.queue1.length == 0 && this.queue2.length == 0 ){
            return "Stack is Empty"
        }
        if(this.queue1.length == 0){
            while(this.queue2.length-1){
                this.queue1.push(this.queue2.shift());
            }
            this.lastElement = this.queue2.shift();
            return this.lastElement;
        } else if(this.queue2.length == 0){
            while(this.queue1.length-1){
                this.queue2.push(this.queue1.shift());
            }
            this.lastElement= this.queue1.shift();
            return this.lastElement;
        }
    }
    push(data){
        if(this.queue1.length == 0){
            this.queue2.push(data);
            this.lastElement = data;
        }
        if(this.queue2.length == 0){
            this.queue1.push(data);
            this.lastElement = data;
        }
    }
    peek(){
        if(this.queue1.length == 0 && this.queue2.length == 0 ){
            return "Stack is Empty"
        } else {
            return this.lastElement;
        }
    }
    isEmpty(){
        return (this.queue1.length == 0 && this.queue2.length == 0);
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)


console.log(stack.pop()); // 6
console.log(stack.isEmpty()); //false 
console.log(stack.pop()); //5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3 
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 2 
console.log(stack.pop()); // 1 
console.log(stack.peek()); // 1 
