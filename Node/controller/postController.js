const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');

const objectData = JSON.parse(data)
const Member = require('../model/member');

exports.getPostController = (req, res) => {
    res.render('register', {
        pageTitle: "Бүртгүүлэх"
    })
}

exports.postRegisterController = (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const number = req.body.number;
    const password = req.body.password;
    const avatar = req.body.avatar;

    const user = new Member(fullname, email, number, password, avatar);
    user.save();

    // console.log(email);
    // console.log(fullname);
    // console.log(number)
    // console.log(password)
    // console.log(avatar)

    console.log(user)
    res.redirect('/');
}