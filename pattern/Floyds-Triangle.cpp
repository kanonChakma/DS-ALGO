#include<bits/stdc++.h>
using namespace std;

int main(){
    int n=5;

    for (int i = 0; i <n; i++)
     {
        for (int j = i; j <=i; j++)
        {
          cout<<j+i+1<<" ";
        }
         cout<<endl;
     }

 int row=5,count=1;
    for (int i = 1; i <=5; i++)
    {
        for (int j = 1; j <=i; j++)
        {
           cout<<count<<" ";
           count++;
        }
           cout<<endl;
    }

    return 0;
}

