const chai = require('chai');
chai.should();

const mergeSort = require('../modules/merge-sort-module.js');

describe("Merge Sort Module", () => {

    let unsortedArray = [5,1,4,2,8];
    let sortedArray = [1,2,4,5,8];

    it("should be function", () => {
        mergeSort.should.be.a.function;
    });
    it("should only have one parameter", () => {
        mergeSort.prototype.constructor.should.have.length(1);
    });
    it("should return an array", () => {
        mergeSort(unsortedArray).should.be.an('array');
    });
    it("sorted array should have same length of unsortedArray", () => {
        let length = unsortedArray.length;
        mergeSort(unsortedArray).should.have.length(length);
    });
    it("should return array with length of 5", () => {
        mergeSort(unsortedArray).should.have.length(5);
    });
    it("input array should only have numbers as inputs", () => {
        for(let i = 0; i < unsortedArray.length; i ++){
            unsortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should only have numbers as inputs", () => {
        let sortedArray = mergeSort(unsortedArray);
        for(let i = 0; i < unsortedArray.length; i++){
            sortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should equal [1,2,4,5,8]", () => {
        mergeSort(unsortedArray).should.deep.equal(sortedArray);
    });
});