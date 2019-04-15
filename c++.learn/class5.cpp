#include <iostream>
using namespace std;
//  返回值优化

class C {
 public:
  C() { cout << "Constructor" << endl; }
  C(const C& s) { cout << "Copy Constructor" << endl; }
  ~C() { cout << "Destructor" << endl; }
};

int main() {
  // C c1 = C();
  // C& c2 = c1;
  // cout << "1111111111111111111" << endl;
  // C&& c3 = C();  //*延长了c()值的作用域
  C();           //*直接就调用了析构函数
  cout << "222222222222222222" << endl;

  int&& s = 3;

  // cout << sizeof(c2) << endl;

  return 0;
}

// 在编译选项中加入参数 -fno-elide-constructors ，可以看到不优化的结果
