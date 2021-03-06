class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push (value) {
    let newNode = new Node (value);
     if (!this.head) {
       this.head = newNode;
       this.tail = newNode;
     } else {
       this.tail.next = newNode;
       this.tail = newNode;
     }
     this.length ++;
     return this.length;
  }
}

let linkedlist = new SinglyLinkedList();
linkedlist.push(12);
