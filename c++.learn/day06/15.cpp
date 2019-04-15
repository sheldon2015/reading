
#include <cstring>
#include <iostream>
using namespace std;
static string name = "yaowenzhu";
int main(int argc, char* argv[]) {
  class People {
    string name = "ywz";

   public:
    People& change(string _name) {
      name = _name;
      return *this;
    }
    People* change2(string _name) {
      name = _name;
      return this;
    }
    People change3(string _name) {
      name = _name;
      return *this;
    }
    //*const成员函数表明他不会修改对象，因此在他的里面也不能调用非const
    // memember函数
    void print() const { cout << name << endl; }
  };

  People p1;
  p1.change("1").change("2");
  p1.print();

  People p2;
  p2.change2("11")->change2("22");
  p2.print();

  People p3;
  p3.change3("111").change3("222");
  p3.print();

  const People p4;
  p4.print();

  const int& a = 2;
  int&& a1 = 2;
  cout << a << '\t' << a1 << endl;

  return 0;
}
