
#include <iostream>
using namespace std;
class A {
 private:
  int test1 = 3;
  string name1{"test1"};

 public:
  void test() {
    cout << (*this).test1 << endl;
    cout << this->test1 << endl;
    cout << name1 << endl;
  }
  void setTest() {
    test1 += 100;
    name1 += name1;
  }
  A() { cout << "构造函数1" << endl; }
  A(int a) { cout << "构造函数2" << endl; }
  A(const A& s) { cout << "复制构造函数" << endl; }
  ~A() { cout << "析构函数" << endl; }
};

int main() {
  A a{};
  // 增加了100
  a.setTest();
  a.test();
  cout << "-------1" << endl;

  A b{2};
  b.test();
  cout << "-------2" << endl;

  A c{a};
  c.test();
  cout << "-------3" << endl;

  // 修改a中的test1
  a.setTest();
  c.test();

  return 0;
}