
function bubbleSort(array) {
    //sort array here
    for(let i = 0; i < array.length; i ++){
        if(array[i] > array[i + 1]){
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return array;

}
let unsortedArray = [5,1,2,4,8,88,7,10];

console.log(bubbleSort(unsortedArray));

module.exports = {
    bubbleSort
};