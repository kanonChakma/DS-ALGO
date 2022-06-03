#include<bits/stdc++.h>
using namespace std;

int main(){
    int row=10;

    for (int i = 0; i < row; i++)
    {
        for (int j = i; j < row; j++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }

    return 0;
}