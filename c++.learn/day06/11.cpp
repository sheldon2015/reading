
#include <array>
#include <cstdarg>
#include <functional>
#include <iostream>
#include <string>
#include <typeinfo>
#include <vector>

using namespace std;

int main(int argc, char* argv[]) {
  class People {
   public:
    string name = "ywz";
    int age = 20;
    int say() { cout << name << "  " << age << endl; }
    void set_name(string name1) { name1 = name; }
  };

  struct PeopleStruct {
    string name = "ywz1111";
    int age = 20;
    int say() { cout << name << "  " << age << endl; }
  };

  People p1 = {};
  p1.set_name("huyun");
  p1.say();
  PeopleStruct p2 = {};
  p2.say();
  return 0;
}
