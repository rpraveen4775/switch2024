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
    findInOrderPredecessor(){

    }

    findInOrderSucessor(){

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
// binaryTree.preOrderTraversal(binaryTree.startNode);
// binaryTree.inOrderTraversalRecursion(binaryTree.startNode);
// binaryTree.postOrderTraversal(binaryTree.startNode);
binaryTree.inOrderTraversal();



/*                                                  1
                                              /          \
                                         2                    3
                                    4       5           6         7
                                 8    9  10    11   12    13   14     15     

*/ 


/*  IN binary tree 
    to Search : BFS/ DFS
    to Delete : replace node to be deleted with left most child of that node 
*/



/*              
                                            20  
                                    8                45
                                3      18        32      52
                            1     4  15   19  21   40  48   60
*/


1 3 4 8 15 18 19 20 21 32 40 42 45 52 60 

/*  IN BST
    to Search : BFS/DFS
    to delete : 
            -- leaf node : Directly delete
            -- node with one child : 
                -- if one child node is left node: 
                        -- delete and replce with left child
                -- if one child node is right node:
                        -- delete and replace with right child
            -- node with two child : 
                    -- either replace it with inordersuccessor
                    -- or replace it     with inorderpredecessor 
*/


/*              
                                            20  
                                    8                45
                                3      18        32      52
                            1     4  15   19  21   40  48   60
*/


    1, 15
/* 

 DFS :for 1   

    nodes :    20(v1) 8(v1) 3(v1) 1(v1) 
    
DFS for node 15: 
    nodes :    
        20(v2) 8(v2) 18(v1) 15(v1) 
