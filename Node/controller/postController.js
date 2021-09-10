const path = require('path');
const fs = require('fs');
const Student = require('../model/member')

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

    const user = new Student({
        name: fullname,
    })
   
    user.save()
    .then(result => {
        console.log(result)
        res.redirect('/');
    })

}