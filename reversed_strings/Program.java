package reversed_strings;

import java.util.Scanner;


class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder str = new StringBuilder(scanner.nextLine());
        
        str.reverse();
        System.out.println(str);

        scanner.close();
    }
}
