#include <iostream>
using std::cout;
using std::string;

int main()
{
  const string s = "0123456789a";
  cout << "length  " << s.length() << '\n';
  cout << "capacity  " << s.capacity() << '\n';
  const char *p = "123";
  cout << p << '\n';
  cout << s.c_str() << '\n';

  return 0;
}