let arr1 = [1,2,3];
let arr2 = [4,5];

arr1=arr1.sort((a,b)=> a -b);
arr2=arr2.sort((a,b)=> a -b);
let mergedArray = mergeSortedArrays(arr1, arr2)

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}


let n = mergedArray.length;
console.log(n);
console.log(mergedArray);
if(n % 2){
    console.log(mergedArray[Math.floor(n/2)]);
} else {
    console.log((mergedArray[n/2] + mergedArray[(n/2)-1])/2);
}




