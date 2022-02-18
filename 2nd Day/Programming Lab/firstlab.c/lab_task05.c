#include <stdio.h>

int main()

{    
    //take two varibale a and b
    float a,b;
    printf("Please type your First Number: ");
    //take first input form users
    scanf("%f",&a);

    printf("Please type your Second Number: ");
    //take second input form users
    scanf("%f",&b);
    
    // now sum the two vaiables
    float sum=a+b;

    //now output the sum of two varibles
    printf(" The sum is  %.2f ",sum);
    return 0;
}