
#include <iostream>
using namespace std;
int main() {
  int s[2];
  s[0] = 1;
  s[1] = 2;
  s[2] = 3;
  // *数组越界，可能已发异常行为
  cout << s[2] << endl;
  cout << s[3] << endl;
  cout << s[4] << endl;
  int s1[2] = {1, 9};
  cout << s1[2] << endl;
  cout << s1[4] << endl;
  cout << s1[14] << endl;

  string a = "1111";
  //*初始化
  string b = a;
  //*声明、定义变量
  string c = a;
  //*赋值
  c = a;
  cout << c << endl;

  // int a1 = 20;
  // int temp = a1;
  // int a2[temp] = {1};

  int temp = 5;
  int length = temp;
  int array[length];

  int m[]{1, 2};
  int* p = m;
  cout << *(p) << endl;
  cout << *(p + 1) << endl;
  cout << *(p + 2) << endl;

  return 0;
}