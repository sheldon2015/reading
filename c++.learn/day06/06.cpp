
#include <array>
#include <iostream>
#include <vector>

using namespace std;

int a1() {
  int x = 1;
  return x;
}
int& a2() {
  static int x = 1;
  return x;
}

int main() {
  array<int, 3> myarray = {1, 2, 3};
  cout << myarray[0] << endl;
  cout << myarray.at(1) << endl;

  using index_t = array<int, 3>::size_type;

  for (index_t i = 0; i < myarray.size(); i++) {
    cout << myarray[i] << endl;
  }

  vector<int> my_vector = {1, 2, 3};
  cout << my_vector.size() << endl;

  int a = 1;
  int& r = a;
  int& r2 = r;
  int& r3 = r2;
  cout << a << r << r2 << r3 << endl;
  cout << a1() << endl;
  cout << a2() << endl;
  int c = a1();
  int& c1 = a2();
  cout << c << endl;
  cout << c1 << endl;
}