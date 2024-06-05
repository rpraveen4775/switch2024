let a = [2,8,5,3,9,4]
console.log("a before sorting ",a);

for(let i = 0; i< a.length;i++){
    let min = a[i];
    let position = i;
    for(let j = i+1; j< a.length;j++){
        if( min > a[j]){
            min = a[j];
            position = j;
        }
    }
    let temp = a[position];
    a[position] = a[i];
    a[i] = temp;
}

console.log(a);
