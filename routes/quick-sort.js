const express = require('express');
const router = express('router');
const quickSort = require('../modules/quick-sort-module.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    console.log(req.body);
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    console.log(unsortedArray);
    let sortedArray = quickSort(unsortedArray);
    console.log(sortedArray);
    res.render('index', {array: sortedArray});
});

module.exports = router;