
// *分离式编译，接口和实现分开
// *#include指令<>和""的区别
#include <iostream>
#include <limits>

#include "test.h"

int main() {
  // std::cout << "Hello World" << std::endl; //
  // char s = '2';
  // int s1 = static_cast<int>(s);
  // std::cout << s; //
  // std::string s11 = "11111111111";
  // std::cout << s11;

  // const int a{444};

  //  *类型两边的const是一样效果，申明变量read-only

  // const int const *const m = &a;
  // const int const *const m = &a;
  // const int *n = &a;
  // std::cout << ++(*m);

  // std::cout << f();
  // std::cout << test{}.show();

  const int s = 1;
  std::cout << s;

  std::cin.clear();
  std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
  std::cin.get();

  return 0;
}