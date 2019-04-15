#include <cstring>
#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::string;

int main() {
  cout << "test print:" << endl;
  printf("可以输出吗");

  int integer;
  cout << integer << endl;
  // *c风格的字符串
  char s[] = "abc\0";
  cout << strlen(s) << endl;
  // *c++风格的字符串
  string s1 = "abc";
  string* s2 = &s1;
  string& s3 = s1;
  *s2 = "12345";

  cout << s1.size() << endl;
  cout << s3.size() << endl;

  for (auto&& i : s3) {
    cout << i << endl;
  }

  int s111;
  cout << s111 << endl;

  return 0;
}