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


const matrice = (matriceA, matriceB) => {

    let result = Array.from({length: matriceA.length}, () => []);

    for (let i = 0; i < matriceA.length; i ++ ) {
        for (let j = 0; j < matriceA.length; j ++) {

            result[i].push (2 * matriceA[i][j] + matriceB[i][j]);

        }
    }

    return result;
}

const multipleMatrices = (matriceA, matriceB, matriceC) => {
    let multiple = Array.from({length: matriceA.length}, () => []);
    let result = Array.from({length: matriceA.length}, () => []);


    for (let i = 0; i < matriceA.length; i ++ ) {
        for (let j = 0; j < matriceB[j].length; j ++) {
            let sum = 0;
            for (let k = 0; k < matriceA[i].length; k ++) {
                sum += matriceA[i][k] * matriceB[k][j];
            }
            multiple[i].push(sum);
        }
    }
    for (let o = 0; o < multiple.length; o ++) {
        for (let p = 0; p < multiple[o].length; p ++) {
            result[o].push(multiple[o][p] + matriceC[o][p])

        }
    }
    return result;
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
