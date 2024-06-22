/* 

* * * * *
* * * *
* * *
* *
*

*/
let size = 5 ;
let pattern = function(row, col){
    if(row < 0){
        return;
    }
    if(col<row){
        process.stdout.write("*  ");
        pattern(row, col+1)
    } else {
        console.log();
        pattern(row-1,0);
    }  
}

pattern(5,0);