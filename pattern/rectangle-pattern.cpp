#include<bits/stdc++.h>
using namespace std;

int main(){
    int row, column;
    cout<<"Enter the row and column"<<endl;
    cin>>row>>column;

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < column; i++)
        {
            cout<<"*"<<" ";
        }
        cout<<endl;
    }

    return 0;
}