#include <iostream>
using namespace std;
//  返回值优化

class C
{
public:
  C() { cout << "Constructor" << endl; }
  C(const C &s) { cout << "Copy Constructor" << endl; }
  ~C() { cout << "Destructor" << endl; }
};

C foo()
{
  C c1;
  return c1;
}

int main()
{
  C c2 = foo();
  return 0;
}

// 在编译选项中加入参数 -fno-elide-constructors ，可以看到不优化的结果
