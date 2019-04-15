
#include <iostream>
using namespace std;
void change_array(int (&a)[4]) {
  a[3] = 111;
}
int main() {
  int* p = new int[2]{1, 2};
  char* p1 = new char[2]{'1', '2'};
  const char* p2 = "111";
  cout << *p << endl;
  cout << *p1 << endl;
  int arry[4] = {1, 2, 3, 4};
  change_array(arry);
  cout << arry[3] << endl;
  const int& a = 11;
  int&& b = 222;
  cout << a << endl;
  cout << b << endl;

  return 0;
}