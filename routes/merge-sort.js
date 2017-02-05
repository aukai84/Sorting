const express = require('express');
const router = express('router');
const mergeSort = require('../modules/merge-sort-module.js');

router.post('/', (req, res) => {
    console.log('merge sorting....');
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    let sortedArray = mergeSort(unsortedArray);
    res.render('index', {array: sortedArray, name: "Merge Sort"});
});

module.exports = router;