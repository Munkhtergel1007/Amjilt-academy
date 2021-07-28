class Node {
    constructor(value){
        this.value = value; 
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
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
    pop() {
        if (this.length === 0) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newtail = this.head;
            let deleteNode = newtail.next;
            while (deleteNode.next != null) {
                deleteNode = deleteNode.next;
                newtail = newtail.next;
            }
            this.tail = newtail;
            var popper =  this.tail.next;
            this.tail.next = null;
        }
        this.length--;
        return popper;
    }

    unshift (val) {
        let unshift = new  Node (val);
        if (!this.head) {
            this.tail = unshift;
            this.head = unshift;
        } else {
            unshift.next = this.head;
            this.head = unshift;
        }

        this.length ++;
        return this.length;
    }

    shift () {
        if (!this.head) {
            return undefined;
        }
        let old = this.head;
        this.head = old.next;
        old.next = null;
        this.lenght --;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return old.value;
    }

    get (index) {
        if (this.length >= index && index < 0) {
            return undefined;
        } 
            let a = 0;
            let  current = this.head;
            while (a != index) {
                current = current.next;
                a ++;
            }
        return current;
    }

    set (index, value) {
        let a = (this.get(index));
            if (!a) {
                return false;
            } else {
                a.value = value;
                return true;   
            }
    }
    insert (index, value) {
        let newNode = new  Node (value);
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value)
        }
        if (this.get (index) === null) {
            return false;
        }
        let a = this.get(index-1);
        let temp = a.next;
        a.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }  
    remove (index) {
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        let a = this.get(index - 1);
        let temp = a.next;
        a.next = temp.next;
        temp.next = null;
        this.length --;
        return temp;
    }  

    reverse () {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = null;
        let prev = null;
        
        for (i = 0; i < this.length; i ++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;

    }
    print() {
        let arr = [];

        let a = this.head;
        while (a != null) {
            arr.push(a.value);  
            a = a.next
        }
        return arr;
    } 
}

let linkedlist = new SinglyLinkedList();
linkedlist.push(12);
linkedlist.push(13);
linkedlist.push(14);
linkedlist.push(15);

const combineLists = (l1, l2) => {
    let result = new SinglyLinkedList();
	let list1 = new SinglyLinkedList();
	let list2 = new SinglyLinkedList();

	l1.forEach(el => list1.push(el));
	l2.forEach(el => list2.push(el));
	
	
	if (list1.length > list2.length) {
		for(let i = list2.length; i < list1.length; i ++) {
			list2.push(0);
		}
	}

    for (let j = 0; j < list1.length; j ++) {
        let el1 = list1.get(j);
        let el2 = list2.get(j);
        result.push(el1.value + el2.value);
    }

    let current = result.head;
  

    while(current.next) {
        if (current.value >= 10) {
            current.next.value += +current.value.toString()[0];
            current.value = +current.value.toString()[1];
        }
        current = current.next;
    }

    if (current.value >= 10) {
        result.push(+current.value.toString()[0]);
        current.value = +current.value.toString()[1];
    }
    // if (current.value >= 10) {
    //     result.push(0);
    //     let preTail = result.get(result.length - 2);
    //     result.tail.value += +preTail.value.toString()[0];
    //     preTail.value = +preTail.value.toString()[1];
    // }
	console.log(result.print());
}

