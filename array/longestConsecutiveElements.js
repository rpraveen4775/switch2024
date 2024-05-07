/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(a) {
let dic = new Map();

for(let element of a ){
    dic.set(element, true )
}

let maxLength = 0 ;
for(let index=0 ; index < a.length; index++){
    let presentElement = a[index];
    while(dic.size && dic.has(presentElement)){
        presentElement--;
    }
    let eachLength = 0;
    presentElement++;
    while(dic.size && dic.has(presentElement)){
        eachLength++
        dic.delete(presentElement)
        presentElement++
    }
    if (maxLength < eachLength) {
        maxLength = eachLength
    }
}
return maxLength;
};
