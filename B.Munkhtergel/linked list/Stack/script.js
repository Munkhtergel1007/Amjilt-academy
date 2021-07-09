class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor (){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push (value) {
        let newNode = new Node (value);
        if (!this.head) {
            this.first = newNode;
            this.last = newNode;  
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return this.size;
    }
    pop() {
        if (this.size === 0) return undefined;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            let newlast = this.first;
            let deleteNode = newlast.next;
            while (deleteNode.next != null) {
                deleteNode = deleteNode.next;
                newlast = newlast.next;
            }
            this.last = newlast;
            var popper =  this.last.next;
            this.last.next = null;
        }
        this.size--;
        return popper;
    }
}

stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(16);

