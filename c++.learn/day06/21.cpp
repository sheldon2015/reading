#include <cassert>
#include <iostream>
using namespace std;
class Base {
 protected:
  string name;

 public:
  Base() { cout << "default Base constructor" << endl; };
  Base(string _name) : name(_name) { cout << "base constructor" << endl; }

  virtual void info() { cout << "base info" << endl; }
  ~Base() { cout << "base info destory" << endl; }
};
class Child : public Base {
 private:
  int age;

 public:
  using Base::name;
  Child() { cout << "default Child constructor" << endl; }
  Child(int _age) : age(_age) { cout << "Child1 constructor" << endl; }
  // * 代理构造器可以起代理的作用或者初始化的作用
  Child(int _age, string _name) : Base(_name), age(_age) {
    cout << "Child2 constructor" << endl;
  }
  void getInfo() {
    cout << name << endl;
    cout << age << endl;
  }
  void info() override { cout << "Child info" << endl; }
  friend void getCents(const Child&);
};
void getCents(const Child& c) {
  cout << c.name << endl;
  cout << c.age << endl;
}

int main() {
  Base* p = new Base();
  delete p;
  Child c = {11, "ywz"};
  c.getInfo();
  getCents(c);
  cout << c.name << endl;

  Base& b = c;
  b.info();

  int a = 1;
  int* p1 = &a;
  cout << p1 << endl;
  int** p2 = &p1;
  cout << p2 << endl;
  cout << **p2 << endl;

  int (*fp)() = nullptr;
  fp();

  return 0;
}