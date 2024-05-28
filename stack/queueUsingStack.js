/// 1 2 3 4 5 
// 5 4 3 2 

// 2 3 4 5 6 
class Queue {
    constructor(){
        this.stack1 = []; // Main Stack 
        this.stack2 = []; // Auxilary Stack
        this.topElement = null;
    }
    enqueue(data){
        if(this.stack1.length == 0 ){
            this.topElement = data ;
        }
        this.stack1.push(data);
    }
    dequeue(){
        if(this.stack1.length == 0 ){
            return "::Queue is Empty"
        }
        while(this.stack1.length - 1){
            this.topElement = this.stack1.pop()
            this.stack2.push(this.topElement);
        }
        let value =  this.stack1.pop();
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop());
        }
        return value;
    }
    top(){
        if(this.stack1.length == 0 ){
            return "Nothing on top :-Queue is Empty"
        } else return this.topElement;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log("Top element",queue.top());
console.log("Removing ",queue.dequeue());
console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());
console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());
console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());
console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());
console.log("Removing ",queue.dequeue());
console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());

console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log("Removing ",queue.dequeue());
console.log("Top element",queue.top());

// queue.enqueue(7);
// queue.enqueue(8);
