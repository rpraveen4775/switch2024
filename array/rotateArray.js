// Rotate An Array In Place
'use strict'
// bruteForce 
/*
let a = [ 1, 2, 3, 4, 5,6,7,8,9,10];

function rotateArray(arr,k){
    let len = arr.length -1 ;
    for(let rotate=0; rotate<k; rotate++){
        let lastElement = arr[len];
        for(let j=len; j>=0; j -- ){
            arr[j]=arr[j-1];
        }
        arr[0]=lastElement;
    }
}

rotateArray(a,4);
console.log(a);

*/


// Correct Solve 


let arr = [1,2,3,4,5]
 
function rotateArray(arr,k){

    if(arr.length == 1 || k == 0 || k == arr.length ) {
        return;
    }
    k = k % arr.length;
    let lastIndex = arr.length - 1 ; 
    reverseArray(arr,0,lastIndex)
    reverseArray(arr,0,k-1)
    reverseArray(arr,k,lastIndex);

}


function reverseArray(a,start,end){
    let mid = (start+end)/2
    for (let index = start, sub=0; index < mid; index++,sub++){ 
        let last = end-sub;
        let temp = a[index]
        a[index] = a[last];
        a[last] = temp;
    }
}

rotateArray(arr,4)
console.log(arr)
