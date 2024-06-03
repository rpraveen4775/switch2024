/*
Input: arr[] = [ 4 , 5, 2 , 25 ]
Output:         4      –>   5
                5      –>   25
                2      –>   25
                25     –>   -1
Explanation: except 25 every element has an element greater than them present on the right side

Input: arr[] = [ 13 , 7, 6 , 12 ]
Output:         13      –>     -1
                7       –>     12
                6       –>     12
                12      –>     -1
Explanation: 13 and 12 don’t have any element greater than them present on the right side
*/


let stack = [];
function top(){
    return stack[stack.length-1];
}
let nextGreaterElementInCircularArray = function(input){
    stack.push(input[0]);
    let len = input.length
    console.log("len is ",len)
    let j =1;
    for(let i=1; i<len; i++){
        if((input[i] < top())){
            stack.push(input[i]);
        } else {
            while(input[i]>top()){
                console.log(""+stack.pop()+" -->  "+input[i]);  
            }
            stack.push(input[i]);
        }
    }
    //console.log("stack is : ",stack );
    for(let i=0; i<len; i++){
        while(input[i]>top()){
            console.log(""+stack.pop()+" -->  "+input[i]);  
        }
    }
    while(stack.length){
        console.log(""+stack.pop()+" --> -1");  
    }
}

nextGreaterElementInCircularArray([ 4 , 50, 2 , 25 ]);
console.log("-----------")
nextGreaterElementInCircularArray([ 13 , 7, 6 , 12 ]);