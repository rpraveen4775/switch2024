// Power of Number 
// 2 Raise to power 4


let power = function(num, pow){
    if(pow == 1){
        return num;
    }
    if(pow%2==0){
        return power(num,Math.trunc(pow/2)) * power(num, Math.trunc(pow/2));
    } else {
        return num * power(num,Math.trunc(pow/2)) * power(num, Math.trunc(pow/2));
    }
}


console.log(power(2,4)); // Ans should be 16
console.log(power(2,5)); // Ans should be 32
