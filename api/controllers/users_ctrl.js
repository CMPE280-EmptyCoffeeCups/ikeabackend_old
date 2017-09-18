'use strict';

const util = require('util');
const crypto = require('crypto');
const mysql = require('./mysql');

module.exports = {
    doLogin
};


function doLogin(req, res) {
    let reqData = req.swagger.params.body.value;

    let email = reqData.email;
    let password = reqData.password;
    let getLoginDetails = "SELECT * FROM cmpe280ikeamysql.users WHERE email_id='" + email + "' LIMIT 1";
    mysql.fetchData(function (err, results) {

        if (err) {
            console.log("Error: " + err);
            res.code = 401;
            callback(null, res);
        } else {
            if (results.length > 0) {

                let passwordDB = results[0].password;
                let saltDB = results[0].salt;
                //let passwordIN = crypto.pbkdf2Sync(password, saltDB, 100000, 64, 'sha256').toString('hex');
                if (password === passwordDB) {
                    res.status(200).json({message: "Login done."})
                } else {
                    res.status(401).json({message: "Login Failed."});
                }
            } else {
                res.status(401).json({message: "Login Failed."});
            }
        }
    }, getLoginDetails);
}

