
#include <stdio.h>

int main()

{    
    //take two varibale a and b
    int a,b;
    printf("Please type your First Number: ");
    //take first input form users
    scanf("%d",&a);

    printf("Please type your Second Number: ");
    //take second input form users
    scanf("%d",&b);
    
    // now sum the two vaiables
    int sum=a+b;

    //now output the sum of two varibles
    printf(" The sum is  %d ",sum);
    return 0;
}