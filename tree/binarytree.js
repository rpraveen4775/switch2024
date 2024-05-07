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
    // Method to remove given node from binary tree
    remove(){
        this.count--;
        // Incomplete
    }
    // Level Order Traversal Iterative Version
    levelOrderTraversal(){
       if(this.startNode==null){
        console.log("No Start Node Found ");
        return;
       }
       let array = [];
       array.push(this.startNode);
        while(array.length){
            let node = array.shift();
            console.log(node.data);
            if (node.left) array.push(node.left);
            if (node.right) array.push(node.right);
        }

    }
    // InOrder Traversal Iterative Version
    inOrderTraversal(){

    }
    // PreOrderTraversal Iterative Version
    preOrderTraversal(){
    }
    postOrderTraversal(){

    }
    // Recursive Inorder : Complete
    inOrderTraversalRecursion(node){  
        if(node==null){
            return;
        } else {
            this.inOrderTraversalRecursion(node.left);
            console.log(node.data);
            this.inOrderTraversalRecursion(node.right);
        }
    }
    // Recursive PreOrder : Complete
    preOrderTraversalRecursion(node){
        if(node==null){
            return;
        } else {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }
    // Recursive Post Order Traversal : Complete
    postOrderTraversalRecursion(){
        if(node==null){
            return;
        } else {
            this.postOrderTraversalRecursion(node.left);
            this.postOrderTraversalRecursion(node.right);
            console.log(node.data);
        }
    }
    // Method to search whether given node exist or not. 
    search(){

    }
    // Method to find Lowest Common Ancestor for two Roots
    findLCA(node1, node2){

    }
    add(data){
        let node = new Node(data);
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
 binaryTree.add(7);


//binaryTree.levelOrderTraversal();
// binaryTree.preOrderTraversalRecursion(binaryTree.startNode);
binaryTree.inOrderTraversalRecursion(binaryTree.startNode);
// binaryTree.postOrderTraversal(binaryTree.startNode);
// binaryTree.inOrderTraversal();