class Node {
    constructor(data){
        this.left = null;
        this.right= null;
        this.data= data;
    }
}

class BinaryTree {
    contructor(){
        this.count=0;
        this.startNode=null;
    }
    add(data){
        this.count++;
        let node = new Node(data);
        if(this.startNode==null){
            this.startNode = node;
            return;
        } else {
            this.insert(node);
        }
    }
    remove(){
        this.count--;
    }
    levelOrderTraversal(){
        let stack = [];
        let pointerNode = this.startNode;
        stack.push(pointerNode);
        while(stack.length){
            let node = stack.shift();
            console.log(node.data);
            let leftNode = node.left;
            let rightNode = node.right;

            if(leftNode !=null ){
                stack.push(leftNode);
            }
            
            if(rightNode !=null ) {
                stack.push(rightNode);
            }

        }
       
    }
    inOrderTraversal(){
        let stack = [];
        let pointerNode = this.startNode;

        stack.push(pointerNode);
        while(stack.length){
            let root = stack.pop();
            if(root.right){
                stack.push(root.right)
            }
            stack.push(root);
            if(root.left){
                stack.push(root)
            }
        }
        while(stack.length){
            let root = stack.pop();
            console.log(root.data);
        }
    }
    preOrderTraversal(){

    }
    inOrderTraversalRecursion(node){  
        if(node==null){
            return;
        } else {
            this.inOrderTraversalRecursion(node.left);
            console.log(node.data);
            this.inOrderTraversalRecursion(node.right);
        }
    }
    preOrderTraversalRecursion(node){
        if(node==null){
            return;
        } else {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }
    postOrderTraversalRecursion(){
        if(node==null){
            return;
        } else {
            this.postOrderTraversalRecursion(node.left);
            this.postOrderTraversalRecursion(node.right);
            console.log(node.data);
        }
    }
    search(){

    }
    findLCA(node1, node2){

    }
    insert(node){
        if (this.startNode == null){
            this.startNode = node;
            return;
        }
        let pointerNode = this.startNode;
        let stack = [];
        do {
            if(pointerNode.left == null){
                pointerNode.left = node;
                break;
            } else if (pointerNode.right == null ){
                pointerNode.right = node;
                break;
            } else {
                stack.push(pointerNode.left);
                stack.push(pointerNode.right);
            }
            pointerNode = stack.shift();
        } while(stack.length)

    }
    printStack(stack){
        let output="";
        for ( let i = 0 ; i < stack.length ; i ++){
            let node = stack[i];
            output = output+node.data+",";
        }
        console.log(output);
    }  
}

let binaryTree = new BinaryTree();
binaryTree.add(1);
 binaryTree.add(2);
 binaryTree.add(3);
 binaryTree.add(4);
 binaryTree.add(5);
 binaryTree.add(6);


// binaryTree.levelOrderTraversal();
//binaryTree.preOrderTraversal(binaryTree.startNode);
// binaryTree.inOrderTraversalRecursion(binaryTree.startNode);
// binaryTree.postOrderTraversal(binaryTree.startNode);
binaryTree.inOrderTraversal();