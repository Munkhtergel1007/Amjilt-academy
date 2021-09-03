const path = require('path');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)

const Member = require('../model/member');



exports.homeController = (req, res) => {
    Member.fetchUsers(users => {
        res.render('main', {
            pageTitle: "users",
            users: users
        })
    })
}

exports.loginContoller = (req, res) => {
    res.render('index', {
        pageTitle: "users",
        users: objectData
    });
}

exports.userController = (req, res) => {
    const userId = req.params.id;
    
    const user = objectData.find(el => el.id === +userId)
    console.log(user);
    res.render('account', {
        pageTitle: user.name,
        user: user,
    })
    res.end()
}