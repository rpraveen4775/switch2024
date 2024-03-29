let a = [10,12,7,8,9,3,13,14,15];

let mid = a.length/2;
let length = a.length;
for (let index = 0; index < mid; index++){
    let last = length-index-1
    let temp = a[index]
    a[index] = a[last];
    a[last] = temp;
}
console.log(a);
