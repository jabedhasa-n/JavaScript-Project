#include <stdio.h>

int main()

{
    float a;
    
    printf("please input your First radius: ");
    scanf("%f",&a);

    float area=(3.14*a*a);
    printf("the total area of circle %.2f\n",area);

    float cir=(2*3.14*a);
    printf("the total of cirmamference of circle %.2f",cir);

    return 0;
}