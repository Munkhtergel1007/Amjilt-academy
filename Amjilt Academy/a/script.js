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
  pop () {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newtail = this.head;
      let deleteNode = newtail.next;
      while(deleteNode.next != null) {
        newtail = newtail.next;
        deleteNode = deleteNode.next;
      }
      this.tail = newtail;
      var popper = deleteNode;
      this.tail.next = null;
    }
    this.length --;
    return popper;
  }
}

let linkedlist = new SinglyLinkedList();
