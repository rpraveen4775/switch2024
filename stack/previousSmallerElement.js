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
let previousSmaller = function (input){
    stack.push(input[input.length-1]);
    for(let i=input.length-2; i>=0; i--){
        if(input[i]>top()){
            stack.push(input[i]);
        } else {
            while(input[i]<top()){
                console.log("Previous Smaller: "+stack.pop()+" -->  "+input[i]);  
            }
            stack.push(input[i]);
        }
    }
    while(stack.length){
        console.log("Previous Smaller: "+stack.pop()+" --> -1");  
    }
}


previousSmaller([ 4 , 5, 2 , 25 ]);
console.log("-------")
previousSmaller([ 13 , 7, 6 , 12 ]);