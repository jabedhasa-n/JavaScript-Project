#include <stdio.h>
int main() 
{
    int number;
    printf("Please Type Your Number: ");
    scanf("%d",&number);
    for(int i=1;i<=number;i++){
        for(int j=1;j<=i;j++){
        printf("%2d",i);
        }
        printf("\n");
    }
    return 0;
}

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5