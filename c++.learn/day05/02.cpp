#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;
// *模拟随机数,随机算法
int pseudo_ramdom() {
  static unsigned int seed = 7;
  seed = seed * 123 + 9;
  // * 求模运算
  return seed % 7;
}

int main() {
  for (size_t i = 1; i <= 100; i++) {
    cout << pseudo_ramdom() << "\t";
    if (i % 5 == 0) {
      cout << endl;
    }
  }

  cout << time(nullptr) << endl;
  srand(time(nullptr) / 1);
  cout << rand() << endl;

  return 0;
}
