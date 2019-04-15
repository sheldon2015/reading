
#include <array>
#include <cstdarg>
#include <functional>
#include <iostream>
#include <string>
#include <typeinfo>
#include <vector>

using namespace std;

int func(int a, ...) {
  int sum = 0;
  //*定义数据类型va_list
  va_list list;
  // *初始化list
  va_start(list, a);
  for (size_t i = 0; i < a; i++) {
    //*从list中取值
    sum += va_arg(list, int);
  }
  va_end(list);
  return sum;
}

int main(int argc, char* argv[]) {
  int a = func(5, 1, 2, 3, 4, 5);
  cout << a << endl;
}
