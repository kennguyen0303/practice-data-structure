class Stack{
    constructor(){
        this.items=[];
        this.count=0;
    }

    //add element to top of stack

    push(element){
        this.items[this.count]=element;
        this.count++;
        console.log("current on top: "+this.items[this.count-1]);
        return this.count -1;//return the index of the element
    }

    //return and remove the top aka pop
    //return underfined if stack is empty

    pop(){
        let return_item;
        if(this.count===0) {
            console.log("nothing in the stack");
            return undefined;
        }
        else {
            this.count--;
            return_item= this.items[this.count];
            this.items[this.count]=undefined;
            console.log("Item just popped: "+return_item)
        }
    }
}

const stack=new Stack()
stack.push(100)
stack.push(200)

stack.pop();
stack.pop();