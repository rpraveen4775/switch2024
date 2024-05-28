class TwoStack {
    constructor(size){
        this.array = new Array(size);
        this.stack1Index = -1;
        this.stack2Index = this.array.length;
    }

    push1(data){
        if(this.stack1Index + 1 == this.stack2Index){
            console.log("Stack 1 Overflow ------");
            return;
        }
        console.log("Pushing data : "+data+" in Stack1 ");
        if(this.stack1Index == -1) {
            this.array[this.stack1Index+1] = data;
            this.stack1Index++;
            return;
        } else {
            this.array[this.stack1Index+1] = data;
            this.stack1Index++;
        }
    }
    push2(data){
        if(this.stack2Index-1 == this.stack1Index){
            console.log("Stack 2 Overflow --------");
            return;
        }
        console.log("Pushing data : "+data+" in Stack2 ");

        if(this.stack2Index == this.array.length) {
            this.array[this.stack2Index-1] = data;
            this.stack2Index--;
            return;
        } else {
            this.array[this.stack2Index-1] = data;
            this.stack2Index --;
        }
    }
    pop1(){
        if(this.stack1Index == -1 ){
            return ": --cant remove from Already Empty Stack 1-- "; 

        }
        let data = this.array[this.stack1Index];
        this.array[this.stack1Index] = -1;
        this.stack1Index -- ;
        return data;
    }
    pop2(){
        if(this.stack2Index == this.array.length){
            return ": --cant remove from Already Empty Stack 2-- "; 
        }
        let data = this.array[this.stack2Index];
        this.array[this.stack2Index] = -1;
        this.stack2Index++;
        return data;
    }
    print(){
        for(let i = 0 ; i<this.array.length;i++){
            console.log(this.array[i]);
        }
    }
    
}

let twoStack = new TwoStack(10);
twoStack.push1(1);
twoStack.push1(2);
twoStack.push1(3);
twoStack.push1(4);
twoStack.push1(5);
twoStack.push1(6);
twoStack.push1(7);
twoStack.push2(10);
twoStack.push2(20);
twoStack.push1(8);
twoStack.push1(9);

console.log("Removing "+twoStack.pop2()+ " from stack 2 ");
console.log("Removing "+twoStack.pop2()+ " from stack 2 ");
console.log("Removing "+twoStack.pop2()+ " from stack 2 ");
console.log("Removing "+twoStack.pop2()+ " from stack 2 ");
console.log("Removing "+twoStack.pop2()+ " from stack 2 ");
console.log("Removing "+twoStack.pop2()+ " from stack 2 ");

twoStack.push1(9);
twoStack.print();

console.log("Removing "+twoStack.pop1()+ " from stack 2 ");
console.log("Removing "+twoStack.pop1()+ " from stack 2 ");
console.log("Removing "+twoStack.pop1()+ " from stack 2 ");
twoStack.push2(10);
twoStack.push2(20);

twoStack.print();
