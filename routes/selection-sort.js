const express = require('express');
const router = express('router');
const selectionSort = require('../modules/selection-sort-module.js');

router.post('/', (req, res) => {
    console.log('selection sorting....');
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    let sortedArray = selectionSort(unsortedArray);
    res.render('index', {array: sortedArray, name: "Selection Sort"});

});

module.exports = router;