// const server = require('../server.js');
// const express = require('express');
// const supertest = require('supertest');
//const agent = supertest.agent(server);

const chai = require('chai');
chai.should();
const sortModule = require('../modules/bubble-sort-module.js');
console.log(sortModule);

describe("Sorting Module", () => {

    let bubbleSort = sortModule.bubbleSort;
    let unsortedArray = [5,1,4,2,8];
    let sortedArray = [1,2,4,5,8];
    it("should be function", () => {
        bubbleSort.should.be.a.function;
    });
    it("should only have one parameter", () => {
        bubbleSort.constructor.should.have.length(1);
    });
    it("should return an array", () => {
        bubbleSort(unsortedArray).should.be.an.array;
    });
    it("sorted array should have same length of unsortedArray", () => {
        let length = unsortedArray.length;
        bubbleSort(unsortedArray).should.have.length(length);
    });
    it("should return array with length of 5", () => {
        bubbleSort(unsortedArray).should.have.length(5);
    });
    it("input array should only have numbers as inputs", () => {
        for(let i = 0; i < unsortedArray.length; i ++){
            unsortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should only have numbers as inputs", () => {
        let sortedArray = bubbleSort(unsortedArray);
        for(let i = 0; i < unsortedArray.length; i++){
            sortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should equal [1,2,4,5,8]", () => {
        bubbleSort(unsortedArray.should.deep.equal(sortedArray));
    });






});

