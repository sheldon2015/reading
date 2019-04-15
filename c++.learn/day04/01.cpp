
#include <iostream>
#include <string>
using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
int main(int argc, char const* argv[]) {
  string s1;
  string* const p = &s1;
  *p = "222";
  cout << p << endl;

  cout << "请输入一个数字";
  getline(cin, s1);

  return 0;
}
