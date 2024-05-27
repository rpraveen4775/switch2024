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

    // Process till left most element
    // Pop element and process right, if no right, Then Process it.
    // Stack.pop()
    /*                                              1
                                              /          \
                                         2                    3
                                    4       5           6         7 
                                 8    9  10    11   12    13   14     15     

    */ 

    inOrderTraversalIterative(currentNode){
        let stack = [];
        stack.push(currentNode);
        while(currentNode !=null || stack.length){
            while(currentNode && currentNode.left){
                stack.push(currentNode.left);
                currentNode = currentNode.left;
            }
            let node = stack.pop();
            console.log(node.data);
            if(node.right){
                currentNode = node.right;
            }
        }
    }
    preOrderTraversalIterative(node){
        let stack = [];
        let currentNode = node;
        while(currentNode != null || stack.length){
            while(currentNode!=null){
                console.log(currentNode.data);
                if(currentNode.left){
                    stack.push(currentNode);
                    currentNode = currentNode.left;
                }
            }
           currentNode = stack.pop();
           currentNode = currentNode.right;
        }
    }
    inOrderTraversalRecursion(node){
        if(node == null){
            return;
        }
        this.inOrderTraversalRecursion(node.left)
        console.log(node.data);
        this.inOrderTraversalRecursion(node.right)
    }
    preOrderTraversalRecursion(node){
        if(node==null){
            return;
        } else {
            console.log(node.data);
            this.preOrderTraversalRecursion(node.left);
            this.preOrderTraversalRecursion(node.right);
        }
    }
    postOrderTraversalRecursion(node){
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
let inputArray = [1, 2, 3, 14, 5, 6, 7,8,9,16,11,15,11];

inputArray.forEach(key => binaryTree.add(key));

// binaryTree.levelOrderTraversal();
// binaryTree.preOrderTraversalIterative(binaryTree.startNode);
binaryTree.inOrderTraversalIterative(binaryTree.startNode);
// binaryTree.preOrderTraversalRecursion(binaryTree.startNode);
binaryTree.inOrderTraversalRecursion();



/*                                                  1
                                              /          \
                                         2                    3
                                    4       5           6         7 
                                 8    9  10    11   12    13   14     15     

*/ 


//  1, 3, 2, 5 , 4 

// Pre Order : root left right 
// post order : left right root 

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


/* 

 DFS :for 1   

    nodes :    20(v1) 8(v1) 3(v1) 1(v1) 
    
DFS for node 15: 
    nodes :    
        20(v2) 8(v2) 18(v1) 15(v1) 

*/
