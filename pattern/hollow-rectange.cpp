#include<bits/stdc++.h>
using namespace std;

void firstSolution(int row, int column){

   for (int i = 0; i < row; i++)
     {
         if( i == 0 || i == row-1)
         {
            for (int j = 0; j < column; j++)
            {
                cout<<"*"<<" ";
            }
            cout<<endl;
        }else{
            for (int j = 0; j < column; j++)
            {
                 if( j == 0 || j == column-1){
                     cout<<"*"<<" ";
                 }else{
                     cout<<"  ";
                 }
            }
            cout<<endl;
        }
     }

}

void SecondSolution(int row, int column){

  for (int i = 0; i <row; i++)
  {
      for (int j = 0; j < column; j++)
      {
          if(i==0 || i==row-1){
              cout<<"*"<<" ";
          }
         else if(j==0 || j==column-1)
          {
              cout<<"*"<<" ";
          }
        else{
            cout<<"  ";
         }
      }
       cout<<endl;

   }

}
int main(){

    int row, column;
    cout<<"Enter the row and column"<<endl;
    cin>>row>>column;
    firstSolution(row,column);
     SecondSolution(row,column);
    return 0;
}
