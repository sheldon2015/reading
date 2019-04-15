

#include "02.h"
#include <iostream>
using namespace std;
using constants::GRAVITY;
using constants::NAME;

/*
 * 常量
 * const  and  constexpr
 * c++
 * 中有许多副作用的行为，尽力避免有副作用的的代码(尽量避免undefined行为)，让他的副作用不超过一个
 */
int main() {
  const int s1 = 4;
  cout << s1 << endl;
  const double s2{4};
  cout << s2 << endl;
  const int s3(4);
  cout << s3 << endl;
  const int s4(9);
  cout << s4 << endl;
  cout << GRAVITY << endl;
  cout << NAME << endl;

  cout << static_cast<int>(7.14) << endl;

  cout << -5 / 3 << endl;
  // *取模操作取决于操作数a%b,结果与操作数a有很大关系
  cout << 5 % -3 << endl;
  return 0;
}