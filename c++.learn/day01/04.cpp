/*
 *  初始化变量
 */

#include <iostream>

using namespace std;

int main() {
  // *拷贝初始化

  int a1 = 1.4;
  cout << a1 << endl;
  //*直接初始化

  int a2(2.2);
  cout << a2 << endl;

  //*同一初始化(不会发生向下转换)

  int a3{3};
  int a4{};
  int a5{0};
  cout << a3 << endl;
  cout << a4 << endl;
  cout << a5 << endl;

  cout << sizeof(a1) << endl;
  cout << sizeof('a') << endl;
  cout << sizeof(size_t) << endl;
  cout << sizeof(char) << endl;

  return 0;
}