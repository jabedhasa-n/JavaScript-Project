#include <stdio.h>

int main()

{
    float a;
    
    printf("please input your length in centemeter: ");
    scanf("%f",&a);

    float meter=(a/100);
    printf("%f\n",meter);

    float kilo=(a/(1000*100));
    printf("%f",kilo);

    return 0;
}