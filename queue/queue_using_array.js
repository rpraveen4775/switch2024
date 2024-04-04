// Implement Queue using an array

class Queue {
    constructor(){
        this.arr1 = [];
        this.arr2 = [];
    }
    dequue(){
        if(this.arr1.length==0){
            console.log("Queue is currently Empty");
        }
        while(this.arr1.length!=0){
            this.arr2.push(this.arr1.pop());
        }
        console.log("Removing ", this.arr2.pop());
        while(this.arr2.length!=0){
            this.arr1.push(this.arr2.pop())
        }
    }
    enqueue(element){
        this.arr1.push(element);
    }
    print(){
        console.log(this.arr1);
    }
}


let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequue();
queue.dequue();
queue.dequue();
queue.dequue();
queue.print();
