public class SearchInRotatedArray {

    int BinarySearch(int[] inputArray,int target, int start, int last){
        int mid = (int) Math.floor((start+last)/2);
        int index = -1;
        if(inputArray[mid]==target){
            return mid;
        } else if (last<=start){
            return -1 ;
        }
        if (inputArray[mid]>target){
            last=mid - 1 ;
            index= BinarySearch(inputArray, target, start, last);
        } else if(inputArray[mid]<target){
            start = mid + 1 ;
            index = BinarySearch(inputArray, target, start, last);
        }
        return index;
    }
    public static void main(String[] args) {
        // Imagine Array is rotated by K elements : Left rotation
        int[] inputArray = new int[]{4,5,6,7,8,9,10,1,2,3};

        SearchInRotatedArray searchInRotatedArray = new SearchInRotatedArray();

        int k = 3; // Left Shift 3 times.
        int index1 = 999 , index2 = 999;
        int target = 7;
        index1 = searchInRotatedArray.BinarySearch(inputArray,target,0,9-k);
        index2 = searchInRotatedArray.BinarySearch(inputArray,target,9-k+1,9);
        System.out.println(index1);
        System.out.println(index2);

        if ((index1 == -1) && (index2 == -1) ) {
            System.out.println("Element could not be found in given array");
        } else if (index1 > -1 || index2 > -1){
            if (index1 != -1 )
                System.out.println("Element found at index "+index1);
            if (index2 != -1 )
                System.out.println("Element found at index "+index2);
        }        
    }
}
