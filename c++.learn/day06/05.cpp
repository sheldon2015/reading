
#include <iostream>
using namespace std;

int main() {
  int a = 1;
  int* p = &a;
  // * 指向指针的指针
  int** p1 = &p;
  return 0;
}