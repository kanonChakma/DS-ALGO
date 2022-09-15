#include<iostream>
#include<string.h>

using namespace std;

int firstSolution(string s1)
{
 int count=0;
 for (int i = 0; i < s1.length(); i++)
 {
    if(s1[i] == 'I' & s1[i+1] == 'V'){
      count+=4;
      i++;
    }
    else if(s1[i] == 'I' & s1[i+1] == 'X'){
      count+=9;
      i++;
    }
    else if(s1[i] == 'X' & s1[i+1] == 'L'){
      count+=40;
      i++;
    }
    else if(s1[i] == 'X' & s1[i+1] == 'C'){
      count+=90;
      i++;
    }
    else if(s1[i] == 'C' & s1[i+1] == 'D'){
      count+=400;
      i++;
    }
    else if(s1[i] == 'C' & s1[i+1] == 'M'){
      count+=900;
      i++;
    }else{
        if(s1[i] == 'I') count+=1;
        else if(s1[i] == 'V') count+=5;
        else if(s1[i] == 'X') count+=10;
        else if(s1[i] == 'L') count+=50;
        else if(s1[i] == 'C') count+=100;
        else if(s1[i] == 'D') count+=500;
        else{
            count+=1000;
        }
    }
 }
 return count;
}

//------------------------------Better than first---------------------------
int secondSolution(string s1)
{
 int count=0;
 for (int i = 0; i < s1.length(); i++)
 {
    if(s1[i] == 'I'){
        if(s1[i+1] == 'V'){
           count+=4;
         i++;
        }
        else if(s1[i+1] == 'X'){
           count+=9; 
         i++;
        }
        else{
            count+=1;
        }
    }
    else if(s1[i] == 'X'){
        if(s1[i+1] == 'L'){
          count+=40;
          i++;
        }
        else if(s1[i+1] == 'C'){
          count+=90;
          i++;  
        }else{
            count+=10;
        }
    }
    else if(s1[i] == 'C'){
        if(s1[i+1] == 'D'){
         count+=400;
         i++;
        }else if(s1[i+1] == 'M'){
           count+=900;
           i++; 
        }else{
            count+=100;
        }
     }
    else if(s1[i] == 'V') count+=5;
    else if(s1[i] == 'L') count+=50;
    else if(s1[i] == 'D') count+=500;
    else count+=1000;
  }
 return count;
}

//------------------------Better than second-------------------------------------
int thirdSolution(string s1)
{
 int count=0,len=s1.size();
 for (int i = 0; i < len; ++i)
 {
    if(s1[i] == 'I'){
        if(s1[i+1] == 'V'){
           count+=4;
         ++i;
        }
        else if(s1[i+1] == 'X'){
           count+=9; 
           ++i;
        }
        else{
            count+=1;
        }
    }
    else if(s1[i] == 'X'){
        if(s1[i+1] == 'L'){
          count+=40;
          ++i;
        }
        else if(s1[i+1] == 'C'){
          count+=90;
          ++i;  
        }else{
            count+=10;
        }
    }
    else if(s1[i] == 'C'){
        if(s1[i+1] == 'D'){
         count+=400;
         ++i;
        }else if(s1[i+1] == 'M'){
           count+=900;
           ++i; 
        }else{
            count+=100;
        }
     }
    else if(s1[i] == 'V') count+=5;
    else if(s1[i] == 'L') count+=50;
    else if(s1[i] == 'D') count+=500;
    else count+=1000;
  }
 return count;
}
//---------------------
int fourthSolution(string s1)
{
 int count=0,len=s1.size();
 for (int i = 0; i < len; ++i)
 {
    switch (s1[i])
    {
    case 'I':
       if(s1[i+1] == 'V'){
         count+=4;
           ++i;
        }
        else if(s1[i+1] == 'X'){
           count+=9; 
           ++i;
        }
        else{
            count+=1;
        }
        break;

    case 'X':
        if(s1[i+1] == 'L'){
          count+=40;
          ++i;
        }
        else if(s1[i+1] == 'C'){
          count+=90;
          ++i;  
        }else{
            count+=10;
        }
        break;

     case 'C':
         if(s1[i+1] == 'D'){
         count+=400;
         ++i;
        }else if(s1[i+1] == 'M'){
           count+=900;
           ++i; 
        }else{
            count+=100;
        }
        break;
      case 'V':
        count+=5;
        break; 
      case 'L':
        count+=50;
        break;  
      case 'D':
        count+=500;
        break; 
     default:
        break;
    }
  }
 return count;
}
int main(){
    string s1;
    cin>>s1;
    cout<<fourthSolution(s1);
    return 0;
}
