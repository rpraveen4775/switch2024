class FindDuplicateNumber {

    public static void main(String args[]){
        int[] inputArray = new int[100];
        for (int i = 0 ; i < 100 ; i++) {
            if ( i == 33 ){
                inputArray[i] = inputArray[i-1] ;
                continue;
            } 
            inputArray[i] = i+1; 
        }
        int[] indexArray = new int[inputArray.length + 1];
        for (int j = 0 ; j <100; j++){
            indexArray[inputArray[j]]++;
        }

        for (int k = 0; k < 100; k++){
            if (indexArray[k] > 1 )
                System.out.println(k);
        }
    }
}