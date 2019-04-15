

#include <iostream>
#include "02.h"
using namespace std;
using constants::GRAVITY;
using constants::NAME;

/*
 * sizeo操作符号
 */
int main() {
  int s = 4;
  cout << sizeof(int) << endl;
  cout << sizeof(4) << endl;
  cout << sizeof(s) << endl;

  cout << (s != 4 ? "sdsds" : 2222) << endl;

  return 0;
}