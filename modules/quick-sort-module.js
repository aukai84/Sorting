function quickSort(array) {
    let leftArray = [];
    let rightArray = [];
    let pivot = array[0];
    if(array.length <= 1){
        return array;
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] < pivot){
            leftArray.push(array[i]);
        }
        if(array[i] > pivot){
            rightArray.push(array[i]);
        }
    }
    let newArray = quickSort(leftArray).concat(pivot, quickSort(rightArray));
    return newArray;
}

let unsortedArray = [2,3,5,9,6, 10, 100, 4, 7, 8, 22, 99,7765644, 88654, 2, 3, 4, 5];
console.log(quickSort(unsortedArray));

module.exports = quickSort;