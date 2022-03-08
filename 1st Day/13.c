// Write a C program to check whether a number is divisible by 5 and 11 or not.
#include <stdio.h>
int main()
{
    int number;
    printf("Please Type A number : ");
    scanf("%d",&number);

    if(number%5==0){
        printf("This number is divisible by 5");
    }
    else if(number%11==0){
        printf("This number is divisible by 11");
    }
    else{
        printf("This number is not divisible by 5 or 11");
    }
    return 0;
}