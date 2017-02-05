function selectionSort(array) {
    for(let i = 0; i < array.length; i++){
        let smallest = i;
        for(let j = i +1; j < array.length; j++){
            if(array[j] < array[smallest]){
                smallest = j;
            }
        }
        if(i != smallest){
            swap(array, i, smallest);
        }
    }
    return array;
}

function swap(items, firstIndex, secondIndex) {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

module.exports = selectionSort;