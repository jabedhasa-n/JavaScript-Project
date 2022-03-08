// Write a Program to take the value from the user as input any 
// alphabet and check whether it is vowel or consonant (Using the switch statement).

#include <stdio.h>
int main()
{
    char cha;
    printf("Please type a Alphabet ");
    scanf("%c",&cha);
    switch(cha){
        case 'a':
        printf("this is vowel");
        break;
        case 'e':
        printf("this is vowel");
        break;
        case 'i':
        printf("this is vowel");
        break;
        case 'o':
        printf("this is vowel");
        break;
        case 'u':
        printf("this is vowel");
        break;
        default :
        printf("this is consonant");
        break;
    }
}