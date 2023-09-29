package multiples_of_3_and_5;

import java.util.Scanner;


public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int top = scanner.nextInt();        

        System.out.println(solution(top));

        scanner.close();
    }

    public static int solution(int number) {
        int sum = 0;
        
        for (int i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        
        return sum;
    }
}
