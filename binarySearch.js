function binarySearch(inputArray, target, start, last) {
    var mid = Math.floor((start + last) / 2);
    var index = -1;
    if (inputArray[mid] === target) {
        return mid;
    } else if (last <= start) {
        return -1;
    }
    if (inputArray[mid] > target) {
        last = mid - 1;
        index = binarySearch(inputArray, target, start, last);
    } else if (inputArray[mid] < target) {
        start = mid + 1;
        index = binarySearch(inputArray, target, start, last);
    }
    return index;
}
