#include <iostream>
#include "./enumClass.h"
#include "enum.h"
using namespace std;
typedef char score_t;
// *区分初 始化器列表  和 同一初始化
score_t getScore() {
  return 'a';
}

using age_t = int;
age_t getAge() {
  return 11;
}

struct Students {
  int age{11};
  bool sex = true;
};
Students& getInfo(Students s) {
  s.age++;
  s.sex = false;
  return s;
}

auto testReturn() -> int {
  return 11;
}

int main() {
  COLOR a1 = BLACK;
  COLOR a2(RED);
  COLOR a3{GREEN};

  cout << a2 + 22 << endl;
  cout << a3 + 22 << endl;

  FAMILY f1 = FAMILY::FATHER;
  FAMILY f2 = FAMILY::MOTHER;
  FAMILY f3 = FAMILY::SON;

  cout << getScore() << endl;

  cout << 97 << endl;

  cout << getAge() << endl;

  Students s1({});
  cout << s1.age << endl;
  cout << s1.sex << endl;
  getInfo(s1);
  cout << s1.age << endl;
  cout << s1.sex << endl;
  cout << testReturn() << endl;

  switch (1) {
    int a;  // okay, declaration is allowed before the case labels

    case 1:
      int y;  // okay, declaration is allowed within a case
      y = 4;  // okay, this is an assignment
      break;

    case 2:
      y = 5;  // okay, y was declared above, so we can use it here too
      break;

    case 3: {
      int z = 4;  // illegal, initialization is not allowed within a case
      break;
    }
    default:
      std::cout << "default case" << std::endl;
      break;
  }

  return 0;
}
