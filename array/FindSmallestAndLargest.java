import java.util.HashMap;
import java.util.Map;

class FindDuplicateGeneric {
    public static void main(String args[]) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        int[] inputArray = new int[]{1,2,3,3,4,5,6,6,8,9,20,20};

        for(int element:inputArray){
            if(!hashMap.containsKey(element)){
                hashMap.put(element,0);
            } else {
                System.out.println("Duplicate Elements: "+element);
            }
        }

        // for(Map.Entry<Integer, Integer> entry : hashMap.entrySet()) {
        //     System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        // }
    }
}
