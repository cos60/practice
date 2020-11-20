function bubbleSort(arr) {

    const len = arr.length;

    if (len < 2) {
        return arr;
    }

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}

console.log(bubbleSort([2, 5, 4, 6, 2, 7, 9]))


function quickSort() {



}