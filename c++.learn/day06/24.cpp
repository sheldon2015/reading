#include <iostream>
using namespace std;
template <typename T1, typename T2, typename T3>
T1 join(T2 a, T3 b, int c) {
  return to_string(a + b + c);
}
int main() {
  cout << ::join<string, int, int>(62, 3, 10) << endl;
  return 0;
}
