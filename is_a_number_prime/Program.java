package is_a_number_prime;

class Program {
    public static void main(String[] args) {
        System.out.println(Prime.isPrime(0));
        System.out.println(Prime.isPrime(1));
        System.out.println(Prime.isPrime(2));
        System.out.println(Prime.isPrime(3));
        System.out.println(Prime.isPrime(4));
    }
}

class Prime {
    public static boolean isPrime(int num) {
        int maximumDividor = (int) Math.sqrt(num) + 1;

        if (num < 2) {
            return false;
        }
        if (num == 2) {
            return true;
        }


        for (int i = 2; i < maximumDividor; i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }
}
