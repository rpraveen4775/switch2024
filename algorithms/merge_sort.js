let arr = [10,12,13,14,15,16,7,8,9,3]



function merge_sort(arr, low, high){
    if(low < high){
        let mid = Math.floor((low + high )/ 2);

        merge_sort(arr,low,mid)
        merge_sort(arr,mid+1, high)
        merge(arr,low, mid, high)
    } else {
        return
    }

}

function merge(arr, low, mid, high) {
    let leftIndex = low;
    let rightIndex = mid + 1;

    while (leftIndex <= mid && rightIndex <= high) {
        if (arr[leftIndex] <= arr[rightIndex]) {
            leftIndex++;
        } else {
            const temp = arr[rightIndex];
            // Shift elements to the right by one position
            for (let i = rightIndex - 1; i >= leftIndex; i--) {
                arr[i + 1] = arr[i];
            }
            arr[leftIndex] = temp;
            // Update indices
            leftIndex++;
            mid++;
            rightIndex++;
        }
    }
}

// Example usage:
merge_sort(arr, 0, 9);
console.log(arr);
