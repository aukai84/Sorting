function insertionSort(array) {
    for(var i = 1; i < array.length; i++){
        let currentItem = array[i];
        for(var j = i -1; j >= 0 && array[j] > currentItem; j--){
            array[j + 1] = array[j];
        }
        array[j + 1] = currentItem;
    }
    return array;
}
module.exports = insertionSort;