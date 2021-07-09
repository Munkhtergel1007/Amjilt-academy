class Node {
    constructor (url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}

class History {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    visit (url) {
        let newNode = new Node (url);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this.length;
    }
    
}

let story = new History ();
story.visit("https://twitter.com/");
story.visit("https://www.youtube.com/");
story.visit("https://www.facebook.com/");
