#include <cassert>
#include <initializer_list>
#include <iostream>

using namespace std;
class IntClass {
 public:
  IntClass(const IntClass& a) { cout << "拷贝初始化器" << endl; };
  IntClass(const initializer_list<int>& list) {
    cout << "列表初始化器" << endl;
  }
};

int main() {
  int a = 10;
  assert(a < 11);
  IntClass array{1, 2, 3};
  IntClass array1{1};
  IntClass array2(array);
  return 0;
}