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
        if (!this.first) {
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
        let newlast = this.first;
        let deleteNode = newlast;
        while (newlast.next) {
            deleteNode = newlast;
            newlast = newlast.next;
        }
        let oldLast = this.last;
        this.last = deleteNode;
        deleteNode.next =  null;
        this.last.next = null;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        }
        this.size --;
        return oldLast;
    }


}
class Queue {
    constructor (){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push (value) {
        let newNode = new Node (value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size ++;
        return this.size;
    }

    shift () {
        if (!this.size) return undefined;
        let deleted = this.first;
        this.first = deleted.next;
        deleted.next = null;
        if (this.size === 1) {
            this.first - null;
            this.last = null;
        }

        this.size --;
        return deleted.value;
    }

}

let queue =  new Queue ();

stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(16);

