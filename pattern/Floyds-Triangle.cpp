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
    return 0;
}
