const path = require('path');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');
// const membersList = fs.readFileSync(`${__dirname}/../data/members.json`, 'utf-8');

const objectData = JSON.parse(data)
// const membersList = JSON.parse(membersList);

const Member = require('../model/member');
const { Cipher } = require('crypto');



exports.homeController = (req, res) => {
    Member.fetchUsers(users => {
        console.log(users);
        res.render('main', {
            pageTitle: "users",
            users: users
        })
    })
}

// exports.loginContoller = (req, res) => {
//     res.render('index', {
//         pageTitle: "users",
//         users: objectData
//     });
// }

// exports.userController = (req, res) => {
//     const userId = req.params.id;
    
//     const user = objectData.find(el => el.id === +userId)
//     console.log(user);
//     res.render('account', {
//         // pageTitle: user.name,
//         user: user,
//     })
//     res.end()
// }


exports.getEditController = (req, res) => {
   const userId = req.params.id;
   Member.findbyId(userId, user => {
       res.render('edit', {
           pageTitle: "zasahs",
           user: user
       })
   })
}


exports.postEditController = (req, res) => {
    const userId = req.body.userId;
    const email = req.body.email;
    const fullname = req.body.fullname;
    const number = req.body.number;
    const password = req.body.password;
    const avatar = req.body.avatar;


    const updateUser = new Member(fullname, email, number, password, avatar);
    updateUser.update(userId);

    res.redirect('/')
}   

exports.postDeleteController = (req, res) => {
    const userId = res.body.userId;
    Member.deleteUser(userId)
    res.redirect('/')
}