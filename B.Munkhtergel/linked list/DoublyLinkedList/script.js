class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor (){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    push (value) {
        let newNode = new Node (value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
           
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; 
        }

        this.lenght ++;
        return this;
    }
    pop () {
        let temp = this.tail;
        if (!this.head) {
            return undefined;
        }
        if (this.lenght === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;  
            temp.prev = null;            
        }
        this.lenght --;
        return temp;
    }
    unshift (value) {
        let newNode = new Node (value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
           newNode.next = this.head;
           this.head = newNode;
        }
        this.lenght ++;
        return this;
    }
    shift () {
        let temp = this.head;
        if (this.lenght === 0) {
            return undefined;
        }
        if (this.lenght === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.lenght --;
        return temp;
    }

}

let ddl = new DoublyLinkedList();
ddl.push(12);
ddl.push(13);
ddl.push(14);
ddl.push(15);
ddl.push(16);


