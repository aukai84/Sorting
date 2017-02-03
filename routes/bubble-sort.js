const express = require('express');
const router = express('router');
const bubbleSort = require('../modules/bubble-sort-module.js');

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/', (req,res) => {
    console.log(req.body)
    let unsortedArray = [];
    for(let key in req.body){
        unsortedArray.push(parseInt(req.body.key));
    }
    console.log(unsortedArray);
});

module.exports = router;