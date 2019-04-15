
#include <iostream>
#include <typeinfo>
using namespace std;
int main() {
  const char* a = {"asddadd"};
  cout << a << endl;
  // *在堆上面分配内存，没有delete释放掉内存，内存泄漏了
  int* p = new int{1};
  delete p;
  int s = 3;
  p = &s;
  cout << *p << endl;
  cout << *p << endl;

  return 0;
}