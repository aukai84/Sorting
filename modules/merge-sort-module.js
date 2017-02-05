function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }

    let middle = parseInt(Math.floor(array.length/2));
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle, array.length);
    console.log("left array = ", leftArray);
    console.log("right array = ", rightArray);
    let sortedArray = merge(mergeSort(leftArray), mergeSort(rightArray));
    return sortedArray;
}

function merge(left, right) {
    let result = [];
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right[0]);
            right.shift();
        } else {
            result.push(left[0]);
            left.shift();
        }
    }
    while(right.length){
        result.push(right[0]);
        right.shift();
    }

    while(left.length){
        result.push(left[0]);
        left.shift();
    }
    console.log(result);
    return result;
}

module.exports = mergeSort;