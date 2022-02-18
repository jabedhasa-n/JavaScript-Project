// #include <stdio.h>
// #define FARENHEIT 98 
// int main()
// {
//     float c;
//     c = (FARENHEIT - 32)*5/9;
//     printf("%.2f",c);
//     return 0;
// }

#include <stdio.h>
int main()
{
    int a, b;
    b = 10;
    a =++b + ++b;
    printf("%d %d", a, b);
}