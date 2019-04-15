
#include <array>
#include <functional>
#include <iostream>
#include <string>
#include <typeinfo>
#include <vector>

using namespace std;

int main(int argc, char* argv[]) {
  const char* p[] = {"11", "22", "33"};

  for (auto&& i : p) {
    cout << i << endl;
  }
}
