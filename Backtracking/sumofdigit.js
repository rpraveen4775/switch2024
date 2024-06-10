// String Reversal

let str = "123456";
let sum = 0;
let sumOfdigit = function(str, i){
    if(i == str.length){
        return ;
    }
    sumOfdigit(str, i+1);
    sum = sum + Number(str[i]);
    return sum;
}

console.log(sumOfdigit(str,0));