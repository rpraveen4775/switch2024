// String Reversal

let str = "I am the king of this world";
let strArray = str.split(" ");

let reverse = function(strArray, i){
    if(i==strArray.length){
        return;
    }
    reverse(strArray,++i)
    console.log(strArray[i-1]+" ");
}

reverse(strArray,0);