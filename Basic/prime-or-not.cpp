#include<bits/stdc++.h>
using namespace std;

void findSolution2(int i){
  int dev=2;
  while (dev<i)
  {
      if(i%dev==0){
          cout << "Not Prime Number: "<< endl;
          return;
      }else{
          dev=dev+1;
      }
  }
  cout<<"Prime Number: "<< endl;
}
int main(){
   int i, j, k;
   cout << "Enter The Number";
    cin >> i; 
   while(i>0){
      cin>> j;
       findSolution2(j); 
     i--;
   }
 return 0;    
}
