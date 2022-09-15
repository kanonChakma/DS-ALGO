#include<bits/stdc++.h>
using namespace std;

void findSolution2(int n){
 int num=2, div=2;
 while (num<n)
  {
     while(div<num){
        if(num%div == 0){
           num=num+1; 
        }else{
            div=div+1;
         }
      }
     cout<<num<<endl;
     num++; 
   }  
}
int main(){
    
    int i, j, k;
    cout << "Enter The Number"<<endl;
    cin >> i;
    findSolution2(i); 
    return 0;    
}
