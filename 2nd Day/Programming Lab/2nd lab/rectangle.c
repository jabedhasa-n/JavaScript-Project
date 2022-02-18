#include <stdio.h>

int main()

{
    float l,h;
    
    printf("please input length : ");
    scanf("%f",&l);

    printf("please input height: ");
    scanf("%f",&h);

   float are=l*h;
   printf("The total are of rectangle %.2f",are);

    return 0;
}