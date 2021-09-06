const fs = require('fs');
const path = require('path');
const { get } = require('../router/mainRouter');

const pth = path.join(path.dirname(process.mainModule.filename), 'data', 'members.json');

const getMembers = users => {
    fs.readFile(pth, (err, members) => {
        if(err) {
            users([]);
        } else{
            users(JSON.parse(members));
        }
    });
}


module.exports = class Member {
    constructor(fullname, email, number, avatar, password) {
        this.fullname = fullname;
        this.email = email;
        this.number = number;
        this.avatar = avatar;
        this.password = password;
        this.id = Math.random().toString().split('.')[1];
    }

    save() {
        getMembers(users => {
            users.push(this);
            fs.writeFile(pth, JSON.stringify(users), err => {
                console.log(err);
            });
        })
    }

    update(userId) {
        getMembers(users => {
            const userIndex = users.findIndex(user => user.id === userId)
            if(userIndex) {
                const updatedData = [...users];
                this.id = userId;
                updatedData[userIndex] = this;
                fs.writeFile(pth, JSON.stringify(updatedData), err => {
                    console.log(err);
                });
            }   
        })
    }

    delete(){

    }

    static fetchUsers(users){
        getMembers(users);
    }

    static findbyId(id, user) {
        getMembers(users => {
            const currentUser = users.find(user => user.id === id);
            user(currentUser);
        })
    }

    static deleteUser(id) {
        getMembers(users => {
            const updatedData = users.filter(user => user.id !== id);
            fs.writeFile(pth, JSON.stringify(updatedData), err => {
                console.log(err);
            });
        })
    }
}