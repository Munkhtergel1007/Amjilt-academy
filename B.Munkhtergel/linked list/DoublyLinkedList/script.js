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

    get (index) {
        let counter = 0;
        let current = this.head;

        if (index < 0 || index >= this.lenght) return null;

        if (index >= parseInt(this.lenght / 2)) {
            counter = this.lenght - 1;
            current = this.tail;

            while (counter !== index) {
                current = current.prev;
                counter --;
            }         
        } else {
            counter = 0;
            current = this.head;

            while (counter !== index) {
                current = current.next;
                counter ++;
            }
        }

        return current;
    }

    set (index, value) {
      let found = this.get(index);
      if (!found) {
          return false;
      } else {
          found.value = value;
          return true;
      }
    }

    insert (index, value) {
        let newNode = new Node (value);
        if (index < 0 || index >= this.lenght) return false;

        if (index === 0) {
            return this.unshift(value);
        }
        
        if (index === this.lenght - 1) {
            return this.push(value);
        }
        
        let current = this.get(index - 1);
        let current1 = current.next;
        newNode.next = current1;
        current.next = newNode;
        current1.prev = newNode;
        newNode.prev = current;

        // let temp = current.next;
        // current.next = newNode;
        // newNode.next = temp;
        // newNode.prev = current;
        // temp.prev = newNode;
                                                                                                                                                                                                                          
       


        // let current =this.head;
        // let counter = 0;
        // if (index >= parseInt (this.lenght / 2)) {
        //     current = this.tail;
        //     counter = this.lenght - 1;
        //     while (counter != index) {
        //         current = current.prev;
        //     }
        // }

        this.lenght ++;
        return true;
    }
    
    remove (index) {
        if (index < 0 || index >= this.lenght) return false;

        if (index === 0) {
            return this.shift ();
        }

        if (index === this.lenght - 1) {
            return this.pop();
        }

        let current = this.get(index- 1) 
        let current1 = current.next.next;
        current.next = current1;
        current1.prev = current;

        this.lenght --; 
        return true;
    }
    // reverse () {
    //     let arr = [];

    //     let current  = this.tail;
    //     while (current >= this.head) {
    //         arr.push(current.value);
    //         current = current.prev;
    //     }
        
    //     return arr;
    // }
    reverse () {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = null;
        let prev = null;
        
        for (let i = 0; i < this.length; i ++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;

    }
    print () {
        let arr = [];

        let current  = this.head;
        while (current <= this.tail) {
            arr.push(current.value);
            current = current.next;
        }
   
        return arr;
    }
}

let ddl = new DoublyLinkedList();
ddl.push(12);
ddl.push(13);
ddl.push(14);
ddl.push(15);
ddl.push(16);


