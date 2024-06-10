// fibbonacci Series 
// Given length of fibbonacci . function should print it


let number = 10;
// 0 1 1 2 3 5 8 13 21 34

let fib = function(n){
    if(n==1){
        return 0;
    } 
    if (n == 2 ){
        return 1;
    }
    return  fib(n-1) + fib(n-2)
}

console.log(fib(10));