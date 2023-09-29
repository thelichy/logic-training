package sum_of_positive;

import java.util.Arrays;
import java.util.stream.IntStream;


public class Program {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};

        System.out.println(sum(arr));
    }

    public static int sum(int[] arr){    
        IntStream stream = Arrays.stream(arr);
        return stream.filter(x -> x > 0).sum();
    }
}
