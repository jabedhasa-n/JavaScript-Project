
#include <stdio.h>

#include <stdlib.h>

int main()

{
int a=10, b=10, c=5, d=5, e=6, f=7, g=3, h=30; 
a+=b; 
c-=d; 
e/=g; 
h=(a*b); 
printf("%d %d %d %d %d %d\n",a,b,c,d,e,g); 
a=++c; 
b-=c; 
g=e--; 
printf("%d %d %d %d %d %d\n",a,b,c,d,e,g); 
f = (a%c)+(b-10); 
e=b; 
g%=a; 
printf("%d %d %d %d %d",a,b,c,d,e);
// printf("The digit %d present %d times ",digit,count);
    }