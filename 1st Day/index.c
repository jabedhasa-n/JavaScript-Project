#include <stdio.h>
int main()

{
    int num;
    printf("Please type your phone number: ");
    scanf("%d",&num);
    int rem=num%1000;
    if(rem<100){
    printf("Your Roll  0%d\n",rem);
    }
    else{
    printf("Your Roll %d\n ",rem);
    }
    while(num>=1000){
    num=num/10;
    }
        printf("Your Batch %d",num);
    return 0;
} 