// *返回值优化
#include <iostream>
using std::cout;
using std::endl;
using std::string;
class A {
 private:
  int test1 = 3;
  string name1{"test1"};
  int& ref = test1;

 public:
  void test() {
    cout << (*this).test1 << endl;
    cout << this->test1 << endl;
    cout << name1 << endl;
    cout << &ref << endl;
  }
  void setTest() {
    test1 += 100;
    name1 += name1;
  }
  A() { cout << "构造函数1" << endl; }
  A(int a) { cout << "构造函数2" << endl; }
  A(const A& s) { cout << "复制构造函数" << endl; }

  A& operator=(const A& p) {
    cout << "赋值构造函数" << endl;
    return *this;
  }
  ~A() { cout << "析构函数" << endl; }
};

A getA() {
  A d;
  return d;
}
void getAA(A& m) {
  A d;
  m = d;
}

int main() {
  A s = getA();
  cout << "--------------------1" << endl;
  A f;
  cout << "--------------------2" << endl;
  getAA(f);
  cout << "--------------------3" << endl;
  return 0;
}