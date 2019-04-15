
#include <iostream>
#include <typeinfo>
using namespace std;
int main() {
  //*This is why pointers must have a type. Without a type, a pointer wouldn’t
  //*know how to interpret the contents it was pointing to when it was
  //*dereferenced. It’s also why the type of the pointer and the variable
  //*address it’s being assigned to must match. If they did not, when the
  //*pointer was dereferenced, it would misinterpret the bits as a different
  //*type.

  // !指针和固定数组变量本质上不是一个东西,固定数组变量可以隐式转换为指针类型

  int v = 1;
  int v1 = 2;
  int* p = &v;
  cout << p << endl;
  cout << *p << endl;
  p = &v1;
  cout << p << endl;
  cout << *p << endl;
  // p = nullptr;
  // cout << p << endl;
  // cout << *p << endl;

  int a[]{1, 2};
  cout << typeid(a).name() << endl;
  cout << typeid(p).name() << endl;
  return 0;
}