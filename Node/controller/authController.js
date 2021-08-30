const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/../data/users.json`, 'utf-8');
const objectData = JSON.parse(data)



exports.getLoginController = (req, res) => {
    res.render('login', {
      pageTitle: "Нэвтрэх хуудас"
    })
}

exports.postLoginController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = objectData.find(el => el.email === email.toString());
    if (user) {
      if (user.password === password) {
        res.redirect('/userlist')
      } else {
        res.redirect('/login')
      }
    } else {
      res.redirect('/login')
    }
    
   
    
    // console.log(`${email} ${password}`);

    
}