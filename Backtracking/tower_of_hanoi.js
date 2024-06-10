// Tower of Hanoi 
// Basic is to find that base condition to fulfill its need. 
// Interestingly to solve tower of Hanoi .. with N disks and 3 Rods. .
// Do we know how can we move 1 disk from a to c .. 
// Do  we know how can we move 2 disks from a to c.. 


let toi = function(disks,start,aux,end){
    if(disks==1){
        console.log(start+" --> "+end);
        return;
    }
    toi(disks-1,start,end,aux);
    console.log(start+" --> "+end);
    toi(disks-1,aux,start,end);
}

toi(3,1,2,3);

// Pretty Interesting 