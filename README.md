# Sorting Algorithms

We will be implementing the five sorting algorithms we learned in class (`bubble`, `insertion`, `selection`, `quick`, `merge`).
Below are some instructions and tips on how to implement these algorithms...

##1.Bubble Sort

Bubble sort is one first sorting algorithms taught when a student is learning sorting algorithms.  It is a simple algorithm to implement at the cost of speed.  Basically, bubble sort first compares adjacent items in a list of numbers, and swaps them if they are out of order.  At the end of comparing each adjacent item in the list, if the list is not sorted, the algorithm will run through the list again and compare each adjacent item and swap them if they are out of order.  This continues until the list is sorted.

###Pseudo Code

```javascript
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

###Performance

####Best Case

* O(n) *linear efficiency*

####Worst Case

* O(n<sup>2</sup>) *quadratic efficiency*

##2. Insertion Sort

Insertion sort is another simple algorithm that isn't very efficient with large inputs.  Insertion sort is most similar to Bubble sort than any other sorting algorithm we are learning.  The first item in the list is typically a part of the now "sorted" list.  The algorithm iterates through the rest of the list comparing it with items in the "sorted" list and `inserting` it into the correct place.

###Pseudo Code

```javascript
func insertionSort (var A = list of sortable items)
    for i = 1 to length of A
        currentItem = A[i]
        if currentItem < sortedItem
        insert currentItem into sortedList
end func
```

###Performance

####Best Case

* O(n) *linear efficiency*

####Worst Case

* O(n<sup>2</sup>) *quadratic efficiency*

##3. Selection Sort

Selection sort is yet again another simple sorting algorithm that is easy to implement at the cost of efficiency.  It is also somewhat similar to insertion sort.  The algorithm starts at the left of the "unsorted" list then checks the rest of the list to see if the next number is smaller.  If it is then it swaps it with the previous "smallest" number.

###Pseudo Code

```javascript
func selectionSort(var A = lsit of sortable items)
    for i = 0 to length of A
        smallest = i
        for j = i + 1 to length of A
        if A[j] < A[smallest]
        smallest = j
    if smallest != i //found a smaller number
        swap i and smallest //swapping i with new found smallest number
end func
```

###Performance

####Best Case

* O(n<sup>2</sup>) *quadratic efficiency*

####Worst Case

* O(n<sup>2</sup>) *quadratic efficiency*

##4. Quick Sorty

Quick sort is the so called quickest sorting algorithm that we use today.  The quick sort algorithm creates a `pivot` point on which to compare the rest of the unsorted list.  The algorithm then iterates through the unsorted list and compares it to the `pivot`.  If the next item is less than the `pivot` it stores that item into a "left" array.  If the next item is greater than the `pivot` it stores that item into a "right" array.