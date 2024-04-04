'use strict'

class Node{
    constructor(data){
        this.next =null;
        this.prev = null ;
        this.data = data;
    }
}

class LinkedList{
    constructor(arr){
        let flag = false;
        let prevNode=null;
        this.startnode=null;
        this.lastnode=null;
        while(arr.length){
            let node = new Node(arr.shift());
            if(!flag){
                this.startnode = node;
            } else {
                prevNode.next=node;
            }
            node.prev=prevNode;
            prevNode = node;
            this.lastnode = node;
            flag=true;
        }
    }
    print(){
        let pointer = this.startnode;
        while(pointer!=null){
            console.log(pointer.prev +"  "+pointer.data + "  " +pointer.next );
            pointer = pointer.next;
        }
    }
    add(data){
        let node = new Node(data);
        this.lastnode.next = node;
        node.prev = this.lastnode;
        this.lastnode =node;
    }   
    remove(data){
        let pointer = this.startnode;
        while(pointer!=null){
            if(pointer.data == data && pointer.data == this.startnode.data){
                this.startnode = this.startnode.next;
                break;
            } else if (pointer.data == data){
                let prevpointer = pointer.prev; 
                prevpointer.next = pointer.next;
                break;
            }
            pointer = pointer.next;
                
        }
    }
}

let arr = [1,2,3,4,5,6,7]
let ll = new LinkedList(arr);
ll.add(8);
ll.remove(1);
ll.remove(4);
ll.remove(8);
ll.print();
