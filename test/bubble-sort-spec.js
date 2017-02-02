// const server = require('../server.js');
// const express = require('express');
// const supertest = require('supertest');
//const agent = supertest.agent(server);

const chai = require('chai');
chai.should();
const sortModule = require('../modules/bubble-sort-module.js');
console.log(sortModule);

describe("sortModule", () => {

    let bubbleSort = sortModule.bubbleSort;
    let unsortedArray = [5,1,4,2,8];
    console.log(bubbleSort);
    console.log(bubbleSort(unsortedArray));


    it("should be function", () => {
        bubbleSort.should.be.a.function;
    });

    it("should only have one parameter", () => {
        bubbleSort.constructor.should.have.length(1);
    });

    it("should return an array", () => {
        bubbleSort(unsortedArray).should.be.an.array;
    });




});

