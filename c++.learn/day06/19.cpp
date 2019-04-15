#include <iostream>

using namespace std;

class People {
 public:
  string name;
  People(string _name) : name(_name) {
    cout << "outer class  " << name << endl;
  }
  People(const People& p) { cout << "copy constructor" << endl; }
  void print() { cout << name << endl; }
};

int main() {
  // *copy初始话省略了，因为你用的匿名对象去初始化p2
  People p1 = People("111");
  const People& p2 = People("222");
  p1 = p2;
  cout << p1.name << endl;
  cout << p2.name << endl;

  return 0;
}