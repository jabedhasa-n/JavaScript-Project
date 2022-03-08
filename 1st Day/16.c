//C program to check whether a year is a leap year or not.


#include <stdio.h>
int main()
{
    int year;
    printf("Please Type a Year");
    scanf("%d",&year);

    if(year%4==0 && year%400==0 || year%100!=0){
        printf("This is leap Year %d",year);
    }
    else{
        printf("this is not leap year %d",year);
    }
    return 0;

}