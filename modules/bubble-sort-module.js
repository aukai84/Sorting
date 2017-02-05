
function bubbleSort(array) {
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i + 1]){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return array;
}

module.exports = {
    bubbleSort
};