class FindMissingNumber {

    static int sumOfArrayVals(int[] inputArray) {
        int sum = 0 ;
        for (int eachItem : inputArray){
            sum +=eachItem;
        }
        return sum;
    }

    static int giveMeMissingNumber(int[] inputArray) {
        int length = inputArray.length;

        int expectedSum = (length*(length+1))/2;
        int actualSum = sumOfArrayVals(inputArray);

        return expectedSum - actualSum; 
    }

    public static void main(String args[]){
        // Build Input Array
        int[] inputArray = new int[100];
        for (int i = 0 ; i < 100 ; i++) {
            if ( i+1 == 33 ){
                inputArray[i] = 0 ;
                continue;
            }
            inputArray[i] = i+1; 
        }
        System.out.println(giveMeMissingNumber(inputArray));
    }
}