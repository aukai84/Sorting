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

module.exports = quickSort;