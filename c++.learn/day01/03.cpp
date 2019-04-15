/*
 * 预处理器和 头文件守卫
 *
 */
#include <iostream>
using namespace std;
#ifndef PI03
#define PI
int add(int a, int b) {
  return a + b;
}
#endif

int main() {
  bool flag = false;
  cout << flag;
  // cout << add(1, 3) << endl;
  // int s = 0;
  // cout << "enter a num" << endl;
  // cin >> s;
  // cout << s;

  return 0;
}