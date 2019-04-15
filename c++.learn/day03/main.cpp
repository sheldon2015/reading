
#include <iostream>
#include "func.h"
using namespace std;
// *区分概念的：scope和 duration(作用域和生命周期)
// *链接变量属性
// *extern关键字在不同的上下文有不同的语义(注意全局变量的情况)
// *1.用在前置声明的变量中表明他是一个定义在外部文件的变量
// *2.声明一个变量具有 extern linkage属性
int main() {
  const unsigned char option0 = 65;
  cout << option0 << endl;
  // *前置声明
  extern int g_x;
  extern const int g_y;
  extern int g_test();
  cout << g_x << endl;
  cout << g_y << endl;
  cout << g_test() << endl;

  extern int g_z;
  extern const int g_m;
  cout << g_z << endl;
  cout << g_m << endl;
  cout << test(11111) << endl;

  return 0;
}