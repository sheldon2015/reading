#include <iostream>
#include <string>
using namespace std;

class Base {
 protected:
  int m_value;

 public:
  Base(int value) : m_value(value) {}
  virtual ~Base() { cout << "base dec" << endl; }
};

class Derived : public Base {
 protected:
  std::string m_name;

 public:
  Derived(int value, std::string name) : Base(value), m_name(name) {}
  const std::string& getName() { return m_name; }
};

Base* getObject(bool bReturnDerived) {
  if (bReturnDerived)
    return new Derived(1, "Apple");
  else
    return new Base(2);
}
int main() {
  Base* b = getObject(true);

  Derived* d = dynamic_cast<Derived*>(b);

  if (d)
    std::cout << "The name of the Derived is: " << d->getName() << '\n';

  delete b;


  return 0;
}