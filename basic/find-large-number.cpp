#include<bits/stdc++.h>
using namespace std;
void findSolution1(int i,int j,int k){
  if(i>j){
    if(i>k){
      cout<<i<<endl;
    }else{
     cout<<k<<endl;
    }
  }else{
   if(j>k){
      cout<<j<<endl; 
    }else{
       cout<<k<<endl;  
    }    
  }
}
void findSolution2(int i,int j,int k){
 if(i>j && i>k){
   cout<<i<<endl;
 }
 else if(j>i && j>k){
   cout<<j<<endl; 
 }
 else{
     cout<<k<<endl; 
 }
}
int main(){
   int i, j, k;
   cout << "Enter Three Number";
   cin >> i >> j >> k; 
    findSolution1(i,j,k);
    findSolution2(i,j,k);
 return 0;    
}
