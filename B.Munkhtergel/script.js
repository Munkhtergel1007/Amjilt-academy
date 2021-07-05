// let arr = [12, 0 , 3];
// let x = 0;

// for (let i = 0; i <= 2; i ++) {
//     if (arr[i] == 0) {
//         x ++;
//     }
// }

// console.log(x);

// for (let i = 0; i < 100; i ++) {
//     console.log("Sain Baina Uu")
// }

// for (let i = 10; i <= 99; i ++) {
//     console.log (i);
// }

// a = 2;
// b = 3;
// p = 1;


// for (let i = 1; i <= b; i ++) {
//     p = p * a;
// }

// console.log (p);


// let n = (prompt("toogoo oruulna uu"));
// let s = 0;
// let i;

// console.log(n.length);

// for (i = 0; i < n.length; i ++) {
//     s = s + parseInt(n[i]);
// }
// console.log(s);

// x = 0;
// for (i = 0; i < n.length; i ++) {
//     if (parseInt(n[i]) % 2 === 0) {
//         x ++;
//     }
// }

// console.log(x);

// x = 0;
// for (i = 0; i < n.length; i ++) {
//      if (parseInt(n[i]) % 3 == 0) {
//          x ++;
//     }
// }

// console.log(x);


// s = 0;
// for (i = 0; i < n.length; i++) {
//     if (parseInt(n[i]) % 2 === 0) {
//         s+=parseInt(n[i]);
//     }
// }

// console.log(s);

// let o = n.length - 1;
// x = 0;
// p = false;
// for (i = 0; i < n.length / 2; i ++) {
//     if (n[i] != n[o]) {
//         console.log('NO');
//         i = n.length;
//         p = true;
//     }
//     o --;
// }
// if (p == false) {
//     console.log('YES');
// }


// s = 0;
// for (i = 1; i <= parseInt(n); i ++) {
//     if (parseInt(n) % i === 0) {
//         s ++;
//     }
// }

// console.log(s);

// p = true;

// for (i = 2; i < parseInt(n); i ++) {
//     if (parseInt(n) % i === 0) {
//         i = parseInt(n); 
//         console.log ('NO');
//         p = false;
//     }
// }

// if (parseInt(n) === 1 || parseInt(n) === 2) {
//     console.log('NO');
// } 
// else {
//     if (p == true) {
//         console.log ('YES');
//     }
// }

//  s = 0;
//  a = 3;

// function myFunction (a) {
//     if (a === 1) return 1;
//     return a * myFunction(a - 1);
// }


// function hello (list1, list2) {
//     let medain = 0;
//     let sortedarray = list1.concat(list2).sort(function (a, b) {
//         return a - b;
//     });
//     if(sortedarray.length % 2 === 0) {
//         medain = (sortedarray[sortedarray.length/2] + sortedarray[sortedarray.length/2 - 1]) / 2;
//     }
//         else {
//             medain = sortedarray[Math.floor(sortedarray.length/2)];
//         }
//     return medain;
// }

// let name = prompt ('username');
// let email = prompt('email')
// let number = prompt('phonenumber');
// let profession = prompt ('profession');

// const Person = function(fullname, email, phoneNumber, profession){
//     this.fullname = fullname;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
//     this.profession = profession;
// }

// let user = new Person( 'B.Munkhtergel', 'tergel@gmail.com',  99961444, 'student');

// // Person.prototype.getName = function() {
// //     return this.fullname;
// // }
// Person.prototype.setName = function(arg){
//     this.fullname = arg;
//     return this.fullname;
// }



// const Person = function (question, answer, result) {
//     this.answer = answer;
//     this.question = question;
//     this.result = result;
// }

// let user = new Person ('Mongol jiliin heden uliraltai ve?', [2, 3, 1, 4], 4);


// Person.prototype.get = function () {
//     console.log (this.question);
//     for (let i = 0; i < this.answer.length; i ++) {
//         console.log (`${i + 1}: ${this.answer[i]}`);
//     }-
//     // let a = parseInt(prompt('Ta zuv haruiltiin indexiig oruulna uu'));
    
//     // if (a ===  this.result) {
//     //     console.log (`Haruilt zuv baina`);
//     // }else {
//     //     console.log (`Haruilt buruu baina`);
//     // }
// }


// Person.prototype.checkAnswer = function (answer) {
//     if (this.result === answer) {
//         console.log (`zuv haruilllaaa`)
//     } else {
//         console.log ( `buruu  haruillaa dahin oroldono uu`)
//     }
// }
// user.get();
// let a = parseInt(prompt('Ta zuv haruiltiin indexiig oruulna uu'));
// user.checkAnswer(a)



// class Person {
//     constructor(fullname, email) {
//         this.fullname = fullname;
//         this.email = email;
//     }
//     getName() {
//         return this.fullname;
//     }
//     changeName(arg) {
//         this.fullname = arg;
//         return this.fullname;
//     }
// }

// let user = new Person ('Steve Jobs', 'steve@meal.com');
// let teacher = new Teacher ('Teacher', 'teacher@gmail.com', 'hardworker');

// class Teacher extends Person {
//     constructor (fullname, email, workfeild) {
//         super (fullname, email);
//         this.workfeild = workfeild;
//     }
// }


// const getDigit = (num, i) => {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }
// const countDigits = num => {
//     return num.toString().length;
// } 

// const convert = num => {
//     let loop = countDigits(num);
//     let a = "";
//     let underten = ['zero', 'one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
//     if (loop === 1) {
//         return underten[num];
//     }
//     for (let i = loop - 1; i >= 0; i--) {
//         if (i === 0) console.log (underten[getDigit(num, i)]);
//         if (i === 1) console.log (ten[getDigit(num, i)]);
//         if (i === 2) console.log (underten[getDigit(num, i)] + ` hundred`);
//         if (i === 3 && getDigit(num, i) !== 0) console.log (underten[getDigit(num, i)] + ` thousand`)
//         if (i === 4 && getDigit(num, i-1) !== 0){
//             console.log (ten[getDigit(num, i)]);
//         } 
//         else {
//              if (i === 4) {
//                 console.log (ten[getDigit(num, i)] +  `thounsand`)
//             }
//         }

//     }
// }

const box = document.querySelector('.box')
