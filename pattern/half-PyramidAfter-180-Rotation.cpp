#include<bits/stdc++.h>
using namespace std;

int main(){
    int row=10;

    //First Solution
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < row-i-1; j++)
        {
            cout<<"  ";
        }
        for (int j = 0; j < i+1; j++)
        {
            cout<<"* ";
        }
        cout<<endl;
    }
    //Second Solution
     for (int i = 0; i < row; i++)
      {
        for (int j = 0; j < row; j++)
        {
          if(j<row-i-1){
            cout<<"  ";
          }else{
          cout<<"* ";
          }
        }
        cout<<endl;
     }

    return 0;
}
