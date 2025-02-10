const superbase = require('../config/db');
const asyncHandler = require('express-async-handler');

const createUserQuote = asyncHandler(async(req,res)=>{
    const {name,email,message} = req.body;
    const {data,error} = await superbase
    .from('users')
    .insert({
        name,
        email,
        message
    });

    if(error){
        res.status(400).send({"message":error});
    }

    res.status(200).send({"user":data});
});

const getUserQuotes = asyncHandler(async(req,res)=>{
    const {data,error} = await superbase
    .from('users')
    .select()

    if(error){
        res.status(400).send({"message":error});
    }

    res.status(200).send({"user":data});
});

module.exports = {createUserQuote,getUserQuotes}