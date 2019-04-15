#include <iostream>

class Cents {
 private:
  int m_cents;

 public:
  Cents(int cents) { m_cents = cents; }

  // Overload Cents + int
  Cents operator+(int value);
  Cents operator=(int value) { return Cents{m_cents = value}; };
  // *重载类型转换运算符
  operator int() { return m_cents; };
  friend Cents operator-(Cents& c, int value);
  int getCents() { return m_cents; }
};

// note: this function is a member function!
// the cents parameter in the friend version is now the implicit *this parameter
Cents Cents::operator+(int value) {
  return Cents(m_cents + value);
}

Cents operator-(Cents& c, int value) {
  return Cents{c.m_cents - value};
}
int main() {
  Cents cents1(6);
  cents1 = 3;
  Cents cents2 = cents1 + 2;
  std::cout << "I have " << cents2.getCents() << " cents.\n";
  Cents cents3 = cents1 - 2;
  std::cout << "I have " << cents3.getCents() << " cents.\n";
  int a = cents1;
  std::cout << a << std::endl;

  return 0;
}