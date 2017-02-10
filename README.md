# Sorting Algorithms

We will be implementing the five sorting algorithms we learned in class (`bubble`, `insertion`, `selection`, `quick`, `merge`).
Below are some instructions and tips on how to implement these algorithms...

## 1. Bubble Sort

Bubble sort is one first sorting algorithms taught when a student is learning sorting algorithms.  It is a simple algorithm to implement at the cost of speed.  Basically, bubble sort first compares adjacent items in a list of numbers, and swaps them if they are out of order.  At the end of comparing each adjacent item in the list, if the list is not sorted, the algorithm will run through the list again and compare each adjacent item and swap them if they are out of order.  This continues until the list is sorted.

### Pseudo code

```sh
func bubbleSort ( var A = list of sortable items)
    needs to swap = true
    while(needs to swap)
        needs to swap = false
        for i = 0 to length of A
            if A[i] > A[i + 1]
                swap A[i] and A[i +1]
                needs to swap = true
end func
```

### Performance

#### Best Case

- O(n) *linear efficiency*

#### Worst Case

 - O(n<sup>2</sup>) *quadratic efficiency*.


 ## 2. Insertion Sort

 Insertion sort is another simple algorithm that isn't very efficient with large inputs.  Insertion sort is most similar to Bubble sort than any other sorting algorithm we are learning.  The first item in the list is typically a part of the now "sorted" list.  The algorithm iterates through the rest of the list comparing it with items in the "sorted" list and `sh inserting` it into the correct place.