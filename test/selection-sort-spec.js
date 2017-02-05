const chai = require('chai');
chai.should();

const selectionSort = require('../modules/selection-sort-module.js');

describe("Selection Sort Module", () => {

    let unsortedArray = [5,1,4,2,8];
    let sortedArray = [1,2,4,5,8];

    it("should be function", () => {
        selectionSort.should.be.a.function;
    });
    it("should only have one parameter", () => {
        selectionSort.prototype.constructor.should.have.length(1);
    });
    it("should return an array", () => {
        selectionSort(unsortedArray).should.be.an('array');
    });
    it("sorted array should have same length of unsortedArray", () => {
        let length = unsortedArray.length;
        selectionSort(unsortedArray).should.have.length(length);
    });
    it("should return array with length of 5", () => {
        selectionSort(unsortedArray).should.have.length(5);
    });
    it("input array should only have numbers as inputs", () => {
        for(let i = 0; i < unsortedArray.length; i ++){
            unsortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should only have numbers as inputs", () => {
        let sortedArray = selectionSort(unsortedArray);
        for(let i = 0; i < unsortedArray.length; i++){
            sortedArray[i].should.be.a('number');
        }
    });
    it("sorted array should equal [1,2,4,5,8]", () => {
        selectionSort(unsortedArray).should.deep.equal(sortedArray);
    });
});