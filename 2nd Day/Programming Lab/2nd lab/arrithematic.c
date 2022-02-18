#include <stdio.h>

int main()

{
    int a,b;
    
    printf("please input your First Number: ");
    scanf("%d",&a);
    printf("please input your Second Number: ");
    scanf("%d",&b);

    int operation=a+b;
    printf("%d\n",operation);

    operation=a-b;
    printf("%d\n",operation);

    operation=a*b;
    printf("%d\n",operation);

    operation=a/b;
    printf("%d\n",operation);

    operation=a%b;
    printf("The reminder is  %d\n",operation);

    return 0;
}