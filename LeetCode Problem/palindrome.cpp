#include<bits/stdc++.h>
using namespace std;

//---Convert integer to string----

/*
bool isPalinDrome(int x)
     {
         string s1 = to_string(x);
         int len = s1.length();
         cout<<len<<endl;

        if(len<=1) return false;

        for(int i=0;i<=len/2;i++){
            if(s1[i] != s1[len-i-1]) return false;
         }
      return true;
   }
*/

//-------Using Mod and divide--------

/*
time--Complexity is O(n) and space o(1)
 Here n is the digit of input number;
*/

/*
 bool isPalinDrome(int x)
    {
       int reverseNumber = 0, temp = x, lastDigit = 0;
       while(temp>0){
          lastDigit = temp%10;
          reverseNumber = reverseNumber *10+lastDigit;
          temp =  temp/10;
       }
       if(reverseNumber == x)
         {
          return true;
         }else{
          return false;
        }
    }
*/
//Slightly update of mod and divide solution
bool isPalinDrome(int x){
     // If x is a negative number it is not a palindrome
     // If x % 10 = 0, in order for it to be a palindrome the first digit should also be 0

    int lastDigit = 0,reverseNumber=0;
    if(x<0 || x%10 == 0) return false;

    while(x>reverseNumber){
      lastDigit = x%10;
      reverseNumber = reverseNumber*10 + lastDigit;
       x = x/10;
      }
        // If x is equal to reversed number then it is a palindrome
        // If x has odd number of digits, dicard the middle digit before comparing with x
        // Example, if x = 23132, at the end of for loop x = 23 and reversedNum = 231
        // So, reversedNum/10 = 23, which is equal to x
     return (x == reverseNumber || x == reverseNumber/10);
}
//-------------Another solution-----------------
   // bool isPalindrome(int x) {
        
   //    unsigned int reverseNumber = 0;
   //    int temp = x;
        
   //     while(temp>0){
   //        reverseNumber = (reverseNumber *10)+(temp%10);
   //        temp/= 10;
   //     }
       
   //      return reverseNumber == x;     
   //  }

int main(){
  int number;
  cin>>number;
  cout<<isPalinDrome(number)?"palinDrome":"Not";
  return 0;
}
