/*
The Boyer-Moore voting algorithm is one of the popular optimal algorithms
 which is used to find the majority element among the given elements that have more than N/ 2 occurrences.
  This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, 
  which works in O(N) time complexity and O(1) space complexity.
*/



// Intuition is that if any element is in majority. It will not be cancelled out. 


// First process is to get the majority vote./ 
let findMajorityElement = function (input){
    console.log("==============******================");
    let element = input[0];
    let count = 1;
    for(let i = 1 ; i < input.length;i++){
        if(count == 0 ){
            element = input[i];
            count = 1;
        }
        if(input[i] == element){
            count++;
        } else {
            count -- ; 
        }
    }

    console.log("Possible Majority element is "+element+" if exist");

    // Verify Phase
    let totalOccurance = 0 ;
    for(let j = 0 ; j<input.length;j++){
        if(input[j]==element){
            totalOccurance++
        }
    }
    if(totalOccurance > input.length/2){
        console.log("Majority Element is "+element);
    } else {
        console.log("Majority Element Does not exist");
    }
    
}

findMajorityElement([7,7,5,7,5,1,5,7,5,5,5,5,5,5])
findMajorityElement([1,1,1,1,2,3,5])
findMajorityElement([1,2,3]);