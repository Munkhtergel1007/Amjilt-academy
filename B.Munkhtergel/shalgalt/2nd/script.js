      // const bubbleSort = arr => {
      //   let noChange;
      //   for(let i = 0; i < arr.length; i ++) {
      //     noChange = true;
      //     for(let j = 0; j < i - 1; j ++) {
      //         if (arr[j] > arr[j + 1]){
      //           let temp = arr[j];
      //           arr[j] = arr[j + 1];
      //           arr[j + 1] = temp;
      //           noChange = false;
      //         }
      //     }
      //     if(noChange) {
      //       break;
      //     }
      //   }
      //   return arr;
      // }
      function bubbleSort(arr) {
        let noChange;
        for (let i = arr.length; i > 0; i --) {
          noChange = true;
          for (let j = 0; j < i - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              noChange = false;
            }
          }
          if (noChange) {
            break;  
          }
        }
        let brr = [];
        for (i = arr.length - 1; i >= 0; i --) {
          brr.push(arr[i]);
        }
        return brr;
      }
  

      function exercise1 (arr) {
        brr = [];
        for (let i = 0; i < arr.length; i ++) {
            brr.push(arr[i]);
        }

        // let arr1 = arr.sort((a,b) => b - a);
        let arr1 = bubbleSort(arr);
        let  arr2 = [];
          for (let i = 0; i < brr.length; i ++){
            if(i === 0) arr2.push(`Алтан медал`);
              else if(i === 1) arr2.push(`Мөнгөн медал`);
                  else if(i === 2) arr2.push(`Хүрэл медал`);
                    else  arr2.push(`${i + 1}-р байр`);
          }
            let result = [];
            for (let i = 0; i < brr.length; i ++){
              for(let j = 0; j < arr1.length; j ++){
                if(brr[i] === arr1[j]) {
                    result.push(arr2[j]);
                }
              }
            }
          return result;
      }
      function findMaxIndex(arr){
        let max = arr[0];
        let currentIndex = 0;
        for (let i = 1; i < arr.length; i ++){
          if (arr[i] > max) {
            max = arr[i];
            currentIndex = i;
          }
        }
        return currentIndex;
      }

      function exercise2(arr){
        let index = findMaxIndex(arr);
        arr = bubbleSort(arr);
        if (arr[0] <  arr[1] * 2){
          return -1;
        } else {
          return index;
        }
      }
        
      class Node {
        constructor(value) {
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
      
        push(value){
          let newNode = new Node(value);
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
        pop(){
          
          if(!this.head){
            return undefined;
          }

          let current = this.head;
          let newTail = current;
          while(current.next){
            newTail = current;
            current = current.next;
          }
          this.tail = newTail;
          this.tail.next = null;

          this.length --;

          if(this.length === 0) {
            this.head = null;
            this.tail = null;
          }
          return current;  
        }



        shift(){
          if(!this.head) {
            return undefined;
          } 
          let temp = this.head;
          this.head = this.head.next;
          if(this.length === 0){
            this.head = null;
            this.tail = null;
          }
          this.length --;
          return temp;
        }

        get(index){
          if(this.length <= index || index < 0){
            return null;
          }
          let current = this.head;
          let counter = 0;
          while(counter !== index) {
            current = current.next;
            counter ++;
          }
          // for(let i = 0; i < index; i ++){
          //     current = current.next;
          // }
          return current; 

        }

        remove(index){
          if (index < 0 || index > this.length){
            return undefined;
          } else if(index === 0) {
            return this.shift();
          } else if (index === this.length - 1){
            return this.pop();
          }

          let temp = this.get(index - 1);
          let temp1 = temp.next;

          if (!temp) {
            return false;
          } else {
            temp.next = temp1.next;
          }
          this.length --;
          return this;
        }

        print(){
          let result = [];
     
          let i = 0;
          let current = this.head;
          while(i < this.length) {
            result.push(current.value);
            current = current.next;
            i ++;
          }

          return result;
        }

        reverse(index1, index2){
          let node = this.get(index1);
          this.head = this.get(index2);
          this.tail = node;
          let next = null;
          let prev = null;

          this.length = index2 - index1 + 1;
          for(let i = 0; i < this.length; i ++) {
              next = node.next;
              node.next = prev;
              prev = node;
              node = next;  
          }
          return this;  
        }

      }
      

      const exercise3 = (l) => {
        let list = new SinglyLinkedList();
        
      
        l.forEach(el => list.push(el));

        // let arr = list.print();
        // return list.length;
      // let counter = 0;
        for(let i = 0; i < list.length - 1; i ++) {
          for (let j = i + 1; j < list.length; j ++){
            if (list.get(i).value === list.get(j).value) {
              // console.log(list.get(i).value);
              // console.log(list.get(j).value);
              // console.log(counter);
              list.remove(j);
            }
            // counter ++;
          }
        }

        return list;
      }

      const exercise4 = (l, index1, index2) => {
        
        let list = new SinglyLinkedList();

        l.forEach(el => list.push(el));

        if (index1 > index2) {
          let temp = index1;
          index1 = index2;
          index2 = temp;
        } 
        if(index1 >= list.length || index2 >= list.length) return undefined;
        
        let list2 = new SinglyLinkedList();
        for (let i = 0; i < index1; i ++) {
          list2.push(list.get(i).value);
        }
        list3 = new SinglyLinkedList();
        for (let i = index2 + 1; i < list.length; i ++){
          list3.push(list.get(i).value);
        }
        
        // list =  list.print()
        // for (let i = index1; i <= index2; i ++){
          
        // }
        list  = list.reverse(index1, index2);
        
        let main  = new SinglyLinkedList();
  
        for (i = 0; i < list2.length; i ++) {
          main.push(list2.get(i).value);
        }
       
        for (i = 0; i < list.length; i ++){
          main.push(list.get(i).value);
          
        }
      
        for(i = 0; i < list3.length; i ++){
          main.push(list3.get(i).value);
         
        }
        
        return main;

      }
  
