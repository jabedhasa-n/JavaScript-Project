#include <stdio.h>
int main() 
{
    int number;
    printf("Please Type Your Number: ");
    scanf("%d",&number);
    for(int i=1;i<=number;i++){
        for(int j=1;j<=i;j++){
        printf("%2d",j);
        }
        printf("\n");
    }
    return 0;
}

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5