// setTimeout(() => {
//     console.log('hi');
// }, 2000);


class User {
    constructor(name, username, email, address) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
}

const head = document.querySelector('.head');


let info = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

let todo = fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json());





const infoBtn= document.querySelector('#info');
const area = document.querySelector('#area');

let infoArr;
info.then(res => {
    infoArr = res;
});


let todoArr = [];
todo.then(res => {
    res.forEach(el => todoArr.push(el))
})
// let btn;
function init(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        let counter = 0;
        res.forEach(el => {
            head.insertAdjacentHTML('beforeend', `
                <button class="my-4 border hover:bg-green-200 duration-300 btn" id="${infoArr[counter].id}">${el.name}</button>
            `)
            counter ++;
        })
    })
}

init();


document.addEventListener('click', e => {
    for (let i = 0; i < infoArr.length; i ++){
        if(e.target.id === infoArr[i].id){
            let user = new User (infoArr[i].name, infoArr[i].username, infoArr[i].email, infoArr[i].address);
        }
    }
})











