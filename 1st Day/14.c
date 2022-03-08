//Write  C program to find the maximum between three numbers.
#include <stdio.h>
int main()
{
    int a,b,c;
    printf("Please Type a Number");
    scanf("%d %d %d",&a,&b,&c);

    if(a>b && a>c){
        printf("The maximum Number A %d",a);
    }
    else if(b>c){
    printf("The maximum Numbe B %d",b);
    }
    else{
        printf("The Maximum Number  C %d",c);
    }
    return 0;

}
