#include <stdio.h>

int main()

{    
    //take two varibale a and b
    int a,b;
    printf("Please type your First Number: ");
    //take first number form users
    scanf("%d",&a);

    printf("Please type your Second Number: ");
    //take second number form users
    scanf("%d",&b);
    
    // now product of the two vaiables
    int product=a*b;

    //now output the product of two varibles
    printf(" The product is  %d ",product);
    return 0;
}