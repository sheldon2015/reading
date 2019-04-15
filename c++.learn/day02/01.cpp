
#include <iostream>
using namespace std;

/*
 *  整形与浮点型的数据类型
 *  integer  and   float ,double
 */

int main() {
  int8_t s = 65;
  int16_t s1 = 65;
  cout << s << endl;
  cout << s1 << endl;
  //*std::cout will not print the fractional part of a number if the fractional
  // part is 0
  float s2 = 5.0;  //*double 类型
  cout << s2 << endl;
  float s3 = 5.0f;  //*float类型
  cout << s3 << endl;

  unsigned short i = -1;
  cout << i << endl;
  return 0;
}