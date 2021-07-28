class BrowserHistory {
    constructor (homepage) {
        this.histories = [homepage];
        this.currentPageIndex = 0;
    }

    visit (url) {
        this.histories.length = this.currentPageIndex + 1;
        this.currentPageIndex ++;
        this.histories.push(url);
        return `accepted`;
    }

    back (steps) {
        let newIndex = Math.max(0, this.currentPageIndex - steps);
        this.currentPageIndex = newIndex;
        return this.histories [newIndex];
    }

    forward (steps) {
        let newIndex = Math.min(this.histories.length - 1, this.currentPageIndex + steps);
        this.currentPageIndex = newIndex;
        return this.histories[newIndex];    
    }
}

let history = new BrowserHistory('google.com');


class Stack {
    constructor () {
        this.stack = [];
        this.size = 0;
    }

    push (value) {
        this.stack.push(value);
        this.size ++;
    }
    pop () {
        this.stack.pop();
        this.size --;
    }

    peek () {
        return this.stack[this.size - 1];
    }
}    

const isBalanced = brackets => {
    let stack = new Stack();

    for (char of brackets) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.peek() === "(" && char === ")") {
                stack.pop();
            } else {
                if (stack.peek() === "[" && char === "]") {
                    stack.pop();
                } else {
                    if (stack.peek() === "{" && char === "}") {
                        stack.pop();
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    if (stack.size === 0) {
        return true;
    }   else {
        return false;
    }
}










// class History {
//     constructor () {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     visit (url) {
//         let newNode = new Node (url);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length ++;
//         return this.length;
//     }
    
// }

// let story = new History ();
// story.visit("https://twitter.com/");
// story.visit("https://www.youtube.com/");
// story.visit("https://www.facebook.com/");
