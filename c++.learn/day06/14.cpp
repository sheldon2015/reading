
#include <cstring>
#include <iostream>
using namespace std;
int main(int argc, char *argv[])
{
  class People
  {
    string name = "ywz";
    int age = 20;
    const string add = "英山";

  public:
    // People() : name{"ywz111111"} { cout << "default constructor" << endl; }
    // *代理构造器和成员初始化器列表二者只能存在其一
    People(string _name, int _age, string _add)
        : name(_name)
    //  : People()
    {
      cout << "constructor1" << endl;
    }

    ~People()
    {
      cout << "destructor"
           << "\t" << name << endl;
    }

    void print() { cout << name << "\t" << age << "\t" << add << endl; }
  };

  People p{"huyun", 29, "土门河"};
  p.print();

  People *p1 = new People{"huysssssssssun", 29, "土门河"};
  p1->print();

  int *p2 = new int(3);
  cout << p2 << endl;
  cout << *p2 << endl;

  delete p1;
  return 0;
}
