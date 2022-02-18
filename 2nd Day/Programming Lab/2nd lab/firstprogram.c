#include <stdio.h>

int main()
{
    float r,h,volume;

    printf("enter volume radius ");
    scanf("%f",&r);
    printf("enter volume height ");
    scanf("%f",&h);

    volume=((22*r*r*h)/7);

    printf(" The cylinder voume is %.2f",volume);
    return 0;
}