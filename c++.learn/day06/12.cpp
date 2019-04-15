
#include <cstring>
#include <iostream>
using namespace std;
int main(int argc, char* argv[]) {
  class People {
    string name = "ywz";
    int age = 20;

   public:
    void print() { cout << name << "\t" << age << endl; }
    void setName(string _name) { name = _name; }
    void copy(const People& p) {
      name = p.name;
      age = p.age;
    }
  };

  People p1;
  p1.setName("huyun");
  p1.print();
  People p2;
  p2.print();
  p1.copy(p2);
  p1.print();

  const char* p = {"asdfg"};

  const char* pp[2] = {"11", "22"};

  cout << strlen(p) << endl;
  cout << sizeof(p) << endl;

  return 0;
}
