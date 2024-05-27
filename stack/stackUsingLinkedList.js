class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.startNode = null;
    }
    add(node){
        if(this.startNode==null){
            this.startNode = node;
            this.startNode.prev = null;
            this.startNode.next = null;
        } else {
            let pointerNode = this.startNode;
            while(pointerNode.next !=null){
                pointerNode = pointerNode.next;
            }
            pointerNode.next = node;
            node.prev=pointerNode;
        }
    }
    remove(data){
        let pointerNode = this.startNode;
        if(this.startNode == null ){
            console.log("Empty Stack ")
        }
        while(pointerNode.next!=null){
            if(pointerNode.data == data){
                pointerNode.prev = pointerNode.next;
                return;
            }
        }
        console.log("Node not present in linked List");
    }
    deleteLast(){
        let pointerNode = this.startNode;
        if(this.startNode == null ){
            return "Empty Stack";
        }
        if(this.startNode.next == null){
            let data =  this.startNode.data;
            this.startNode = null;
            return data;
        }
        while(pointerNode.next!=null){
            pointerNode = pointerNode.next;
        }
        let data = pointerNode.data;
        let prevNode = pointerNode.prev;
        prevNode.next = null;
        return data;
    }
    printList(){
        let pointerNode = this.startNode;
        while(pointerNode !=null){
            console.log(pointerNode.data);
            pointerNode = pointerNode.next ;
        }
    }
}

class Stack {
    constructor(linkedList){
        this.linkedList = linkedList;
    }
    isEmpty(){
        return this.linkedList.startNode ? false : true ;
    }
    push(data){
        this.linkedList.add(new Node(data));
    }
    pop(){
        return this.linkedList.deleteLast();
    }
    peek(){
        
    }
}

let linkedList = new LinkedList();
linkedList.printList(linkedList.startNode);

let stack = new Stack(linkedList);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
