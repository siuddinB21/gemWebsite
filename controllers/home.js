const express = require('express');
var router = express.Router();


router.get("/",function(req,res){
    res.sendFile(" /home/index.html");
});
