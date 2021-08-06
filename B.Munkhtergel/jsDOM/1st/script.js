// querySelector = hamgiin tutuund taarsan element
// querySelectorAll => DDL ( nextElementSibling )
// getElementsByClassName => List
// getElementById => gantshan el songono

// DOM - Document oriented Model

// const tags = document.querySelector('.pTag');

// background-color => backgroundColor
// line-through
const imgContainer = document.querySelector('.imgContainer');
const modal = document.querySelector('.modal');

let imgURL = '';

// imgContainer.onclick = function(){
//     modal.classList.remove('hidden');
//     imgURL = imgContainer.style.backgroundImage.split('"')[1];

//     modal.children[0].children[1].children[0].src = imgURL
// }

document.addEventListener('click', e => {
    if(e.target.id === 'close'){
        modal.classList.add('hidden')
    }

    if(e.target.classList.contains('modal')){
        modal.classList.add('hidden')
    }
})


// i = ignore the case
// g = buh case;
//  | = or
// * = bugd
// + = taarsiig ni 
// ^ = hamgiin ehnii char
// $ = hamgii suuliing char
// . = buh char
// m. = daraagiin chartai hamt avna
// a-z = buh jijeg useg
// A-Z = buh tom useg
// 0-9 = buh toonuud;
// [];
// ^ = [] dotor ugsun charaas uur buh elementiig haina
// \ = escape operator 
// \W = [^a-zA-Z0-9_] special char
// \w = [a-zA-Z0-9_] regular char
// \D = [^0-9];
// \d = [0-9];
// \S = [^ ];
// \s = [ ];
// {8} - temdegtiin urt;
// {8,} - hamgiin bagadaa
// {1,8} - interval;
// {,12} - 12-s ihgui;

// let regEx = /\S/ig;
// let sentence = 'mongol uls 3.5 say hum amtai. mongol uls 21 aimagtai_';
// console.log(sentence.match(regEx));

const passwordInput = document.querySelector('#password');
const passwordComfirm = document.querySelector('#password--compirm');


const letter = document.querySelectorAll('.letters');
const btn = document.querySelector('#btn');

const fullnameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
// let capitalletter = document.querySelector('.capitalletter');

class User {
    constructor(fullname, email, number, password, passwordComfirm) {
        this.fullname = fullname;
        this.email = email;
        this.number = number;
        this.password = password;
    }
}

let passwordValid = false;
let formIsValid = false;
let passwordMatched = false;

const users = [];

passwordInput.addEventListener('input', () =>{
    let regExp = [/[a-z]/, /[A-Z]/, /\d/, /\W/, /.{8,}/]
    // let jijegUseg = /[a-z]/;
    // let tomUseg = /[A-Z]/;
    // let number = /\d/;
    // let char = /\W/;
    // let len = /.{8,}/
    let regExInput = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?=.{8,})/;

    if (regExInput.test(passwordInput.value)) {
        passwordInput.classList.add('border-green-400');
        passwordInput.classList.remove('border-red-400');
        passwordValid = true;
    } else {
        passwordInput.classList.remove('border-green-400');
        passwordInput.classList.add('border-red-400');
        passwordValid = false;
    }
 
    regExp.forEach((exp, index) => {
        if(exp.test(passwordInput.value)){
            addClasses(index);
        } else {
            removeClasses(index);
        }
    })
})

passwordComfirm.addEventListener('input', () =>{
    if (passwordComfirm.value === passwordInput.value  ){
        passwordComfirm.classList.remove('border-red-400');
        passwordComfirm.classList.add('border-green-400');
        passwordMatched = true;

    } else {
        passwordComfirm.classList.remove('border-green-400');
        passwordComfirm.classList.add('border-red-400');
        passwordMatched = false;
    }
})


function addClasses(i){
    letter[i].classList.add('text-gray-500');
    letter[i].classList.add('line-through');
    letter[i].classList.remove('text-red-500');
}

function removeClasses(i){
    letter[i].classList.remove('text-gray-500');
    letter[i].classList.remove('line-through');
    letter[i].classList.add('text-red-500');
}

function resetForm(){
    fullnameInput.value = '';
    emailInput.value = '';
    numberInput.value = '';
    passwordInput.value = '';
    passwordComfirm.value = '';
}

btn.addEventListener('click', e => {
    e.preventDefault();
    if (fullnameInput.value === ''){
        fullnameInput.classList.add('border-red-400');
        formIsValid = false;
    } else {
        fullnameInput.classList.remove('border-red-400')
        formIsValid = true;
    }

    if (emailInput.value === ''){
        emailInput.classList.add('border-red-400');
        formIsValid = false;
    } else {
        emailInput.classList.remove('border-red-400')
        formIsValid = true;
    }

    if (numberInput.value === ''){
        numberInput.classList.add('border-red-400');
        formIsValid = false;
    } else {
        numberInput.classList.remove('border-red-400')
        formIsValid = true;
    }

    if (formIsValid && passwordValid && passwordMatched) {
        const user = new User (
            fullnameInput.value,
            emailInput.value,
            numberInput.value,
            passwordInput.value,
        )
        users.push(user);
        localStorage.setItem('users', JSON.stringify(user));
        resetForm();
    }
})



// let password = "hA0@sadadasd";

// let jijegUseg = /[a-z]/;
// let tomUseg = /[A-Z]/;
// let number = /\d/;
// let char = /\W/;
// let len = /.{8,}/

// console.log("jijeg useg :"+jijegUseg.test(password));
// console.log("tom useg :"+tomUseg.test(password));
// console.log("number :"+number.test(password));
// console.log("char :"+char.test(password));
// console.log("length :"+len.test(password));