const express = require('express');
const router = express('router');
const insertionSort = require('../modules/insertion-sort-module.js');

router.post('/', (req, res) => {
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    let sortedArray = insertionSort(unsortedArray);
    res.render('index', {array: sortedArray, name: "Insertion Sort"});
});

module.exports = router;