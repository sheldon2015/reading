
#include <array>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int func(int x, int y = 2) {
  return x + y;
}

int func1(int (*p)(int, int)) {
  return p(3, 4);
}
int sumTo(int sumto) {
  // *输出图和调用栈相反
  if (sumto <= 0) {
    cout << 0 << endl;
    return 0;
  } else if (sumto == 1) {
    cout << 1 << endl;
    return 1;
  } else {
    cout << "sumto  " << sumto << endl;
    return sumTo(--sumto) + sumto;
  }
}

int main() {
  // *函数指针
  int (*p)(int, int) = func;
  cout << p(2, 4) << endl;
  cout << (*p)(2, 4) << endl;
  // *传递函数指针，构成回调函数
  cout << func1(p) << endl;
  // *定义函数指针类型
  function<int(int, int)> p1 = func;
  cout << p1(4, 5) << endl;

  vector<int> v = {1, 2, 3, 4};
  cout << v.size() << "\t" << v.capacity() << endl;
  v.push_back(5);
  v.push_back(5);
  v.pop_back();
  cout << v.size() << "\t" << v.capacity() << endl;
  sumTo(5);
}