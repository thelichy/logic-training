
#include <math.h>
#include <stdbool.h>
#include <stdio.h>

bool isPalindrome(int x)
{
    if (x == 0)
    {
        return true;
    }

    if (x < 0)
    {
        return false;
    }

    int length = 0;
    int copy = x;

    while (copy)
    {
        copy /= 10;
        length++;
    }

    int separate[length];

    for (long i = pow(10, length - 1), index = 0; i > 0; i /= 10)
    {
        if (i == 1)
        {
            separate[index] = x % 10;
        }
        else
        {
            separate[index] = x / i % 10;
        }

        index++;
    }

    for (int i = 0, max = length / 2; i < max; i++)
    {
        if (separate[i] != separate[length - i - 1])
        {
            return false;
        }
    }

    return true;
}

// int main(void)
// {
//     printf("%i\n", isPalindrome(535));
// }


// * Better solution:
// bool isPalindrome(int x){
//     if(x<0 || x!=0 && x%10 ==0 ) return false;
//     int check=0;
//     while(x>check){
//         check = check*10 + x%10;
//         x/=10;
//     }
//     return (x==check || x==check/10);
// }
