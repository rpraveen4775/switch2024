let a = [7,8,5,3,9,4]
let len = a.length;

console.log("a before sorting ",a);
while(len){
    let i = 0;
    while(a[i]<a[i+1]){
        i++;
    }
    let j = i+1;
    while(j>=0 && a[j]< a[j-1]){
        let temp = a[j-1];
        a[j-1] = a[j];
        a[j]=temp;
        j--;
    }
    len --;
}

console.log(a);