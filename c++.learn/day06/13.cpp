
#include <cstring>
#include <iostream>
using namespace std;
int main(int argc, char* argv[]) {
  class People {
    string name = "ywz";
    int age = 20;

   public:
    //  *默认初始化
    People() : name("11111"), age(222) {
      cout << "default constructor" << endl;
    }
    People(string _name) {
      name = _name;
      cout << "constructor1" << endl;
    }
    // *拷贝初始化
    People(const People& p) {
      name = p.name;
      age = p.age;
      cout << "constructor2" << endl;
    }
    void print() { cout << name << "\t" << age << endl; }
  };

  People p;
  p.print();
  People p1{"huyun"};
  People p2 = {p1};
  class A {
   public:
    A(int x) { std::cout << "A " << x << "\n"; }
  };

  class B {
   private:
    A m_a;

   public:
    B(int y) : m_a{y - 1} { std::cout << "B " << y << "\n"; }
  };

  B b(5);

    return 0;
}
