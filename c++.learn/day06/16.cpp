
#include <iostream>
#include <type_traits>
using namespace std;

class People {
 public:
  static int s;
};

int People::s;

int main() {
  People p;
  cout << People::s << endl;
  string a = "1111";
  a = "ssssss";
  cout << a << endl;

  const string b = "qqq";
  cout << is_literal_type<int>::value << endl;

  return 0;
}
