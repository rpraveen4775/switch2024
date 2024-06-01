let intervals = [[1,3],[8,10],[15,18],[2,6]];
//sorting would be required for this merge overlapping solution


let sortInterval = function(intervalArray){
    intervalArray.sort((a, b) => a[0] - b[0]);
}


let mergeOverLapping = function(intervals) {
    // first sort given Intervals
    sortInterval(intervals);
    let stack = [];

    stack.push(intervals[0]);
    for(let i = 1 ; i< intervals.length;i++){
        let lastElement = stack.pop();
        let currentElement = intervals[i];

        if(currentElement[0] < lastElement[1] ){
            if(currentElement[1] < lastElement[1]) {
                stack.push([lastElement[0], lastElement[1]]); 
            } else {
                stack.push([lastElement[0], currentElement[1]]); 
            }
        } else {
            stack.push(lastElement);
            stack.push(currentElement);
        }
    }

    console.log(stack);
}
mergeOverLapping([[1,3],[8,10],[15,18],[2,6]]);
mergeOverLapping([[1,4],[2,3]])