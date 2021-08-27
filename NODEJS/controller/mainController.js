const exp = require('constants');
const path = require('path');

exports.homeController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
}

exports.loginController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
}

exports.contactController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
}

exports.aboutController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
}