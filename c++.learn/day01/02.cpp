#include <iostream>
using namespace std;
class A {
 public:
  int s = 1;
  A() { cout << "initila" << endl; }
  A(const A& s) { cout << "copy" << endl; }
  ~A() { cout << "destory" << endl; }
};

A test(A a) {
  cout << 1 << endl;

  return a;
}

int main() {
  A a = A();
  A c;
  //* 默认的拷贝赋值
  c = a;
  cout << c.s << endl;
  cout << a.s << endl;

  ++(c.s);
  cout << a.s << endl;
  cout << &a << endl;
  cout << &c << endl;

  // A b = test(a);

  return 0;
}