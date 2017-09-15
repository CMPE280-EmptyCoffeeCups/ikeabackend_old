'use strict';

let util = require('util');

module.exports = {
    doLogin
};

function doLogin(req, res) {
    let reqData = req.swagger.params.body.value;

    let username = reqData.username;
    let password = reqData.password;


    username === "admin"
    && password === "admin"
    && res.status(200).json({message: "Login done."})
    || res.status(401).json({message: "Login Failed."});

}
