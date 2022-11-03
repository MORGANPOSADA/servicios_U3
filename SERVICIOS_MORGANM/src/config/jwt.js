const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payLoad) =>{
    return jwt.sign(payLoad, process.env.secret);
};

module.exports={
    generateToken,
};