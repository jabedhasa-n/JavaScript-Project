#include <stdio.h>
int main() 
{
    int number;
    int sum=0;
    printf("Please Type Your Number: ");
    scanf("%d",&number);
    for(int i=1;i<=number;i++){
        sum=sum*10+i;
    }
    printf("%d",sum);
    return 0;
}

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5