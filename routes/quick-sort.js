const express = require('express');
const router = express('router');
const quickSort = require('../modules/quick-sort-module.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    console.log('quick sorting....')
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    let sortedArray = quickSort(unsortedArray);
    res.render('index', {array: sortedArray, name: "Quick Sort"});
});

module.exports = router;