#include<bits/stdc++.h>
using namespace std;

void first(){
 int a=10,b=10,c,d, e=2;
 c = ++a;
 d = b++;
 cout<<a<<" "<<b<<" "<<c<<" "<<d<<" "<<e--<<endl;
  cout<<a<<" "<<b<<" "<<c<<" "<<d<<" "<<e--<<endl;
}

void second(){
 int a=10;
     //10   //11
 a = a++ + ++a;
  cout<<a<<endl;
}
void third(){
     int a=10,b=10,c;
        //10 10   10   10    12     12
     c = a + b + a++ + b++ + ++a + ++b;
     cout<<a<<" "<<b<<" "<<c<<endl;
     //12 12 64
}

void Four(){
 int i=0;
    //0     0     1     1
 i = i++ - --i + ++i - i--;
 cout<<i<<endl;
}
void Five(){
  int a=5,b=6,c=7;
        //5   //6     //7
  int m = a-- - b-- - c--;
         //4   //5   //6
   cout<<a<<" "<<b<<" "<<c<< " "<<m<<endl;
}
void Six(){
 int i=10, j=20, k;
   //10    9    19     20    9    20    10    19
 k= i-- - i++ + --j - ++j + --i - j-- + ++i - j++;

   //i=10, j=20,k=
 cout<<i<<" "<<j<<" "<<k<<endl;
}
void Seven(){
 int i=10, j=20, k;
   //10   21     8    22    22    8      8    23
 k= i-- + ++j - --i - ++j + j++ - i-- + ++i - j++;

   //i=8, j=24,k=
 cout<<i<<" "<<j<<" "<<k<<endl;
}
void Eight(){
   int a=40;
   int *b=&a;
   char c='a';
   cout<<"A value is:"<<a<<endl;
   cout<<"B value is:"<<*b<<" "<<b<<" "<<"address of b is"<<&b<<endl;
   cout<<"size of a is :"<<sizeof(a)<<endl;
   cout<<"address of a is :"<<&a<<endl;
   cout<<"cast of a is :"<<int(c)<<endl;
}
int main(){
  first();
  second();
  third();
  Four();
  Five();
  Six();
  Seven();
  Eight();
 return 0;
}
