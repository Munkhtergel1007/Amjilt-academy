const path = require('path');

const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');
const objectData = JSON.parse(data)



exports.getLoginController = (req, res) => {
    res.render('login', {
      pageTitle: "Нэвтрэх хуудас"
    })
}


exports.postLoginController = (req, res) => {
  // console.log(objectData)  
    const email = req.body.email;
    const password = req.body.password;
    
    const currentUser = objectData.find(el => el.email === email.toString());
    if (currentUser) {
      if (currentUser.password === password) {
        res.redirect(`/user/${currentUser.id}`)
      } else {
        res.redirect('/login')
      }
    } else {
      res.redirect('/login')
    }
    
   
    
    // console.log(`${email} ${password}`);

    
}