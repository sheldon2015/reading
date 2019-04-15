#include <cassert>
#include <iostream>
using namespace std;
//*diamond problem  菱形继承问题

class Base {
 public:
  Base() { cout << "base" << endl; }
  Base(const Base& b) { cout << "base copy" << endl; }
  virtual void print() { cout << "base" << endl; }
};

class A : virtual public Base {
 public:
  A() : Base() { cout << "A" << endl; }
  virtual void print() override { cout << "A" << endl; }
};

class A2 : virtual public Base {
 public:
  A2() : Base() { cout << "A2" << endl; }
  virtual void print() override { cout << "A2" << endl; }
};

class C : public A2, public A {
 public:
  string name = "c";
  C() : A(), A2(), Base() { cout << "C" << endl; }
  virtual void print() override { cout << "C        " << name << endl; }
};

int main() {
  // C c = C();
  // Base& b = c;
  // cout << "-----------" << endl;
  // b.print();
  // b.Base::print();

  Base b1 = C();
  b1.print();

  return 0;
}