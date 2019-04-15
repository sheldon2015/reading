
#include <array>
#include <functional>
#include <iostream>
#include <string>
#include <typeinfo>
#include <vector>

using namespace std;

int& func() {
  static int x = 2;
  return x;
}

int main() {
  int s = func();
  cout << s << endl;
  int a = 2;
  cout << typeid(a).name() << endl;
  int& a1 = a;
  cout << typeid(a1).name() << endl;
  cout << a1 << endl;
  int a2 = a1;
  cout << a2 << endl;
  a1++;
  cout << a << endl;
  cout << a1 << endl;
  cout << a2 << endl;

  string m[] = {"hello", "word"};
  cout << *m << endl;
  cout << *(m + 1) << endl;

  char c[] = {'h', 'e', 'l', 'l', 'o'};
  cout << *(c) << endl;
  char c1[] = {"hello"};
  cout << *(c1) << endl;
  const char* c2 = {"hello word"};

  const char* p1 = {"hello"};
  cout << typeid(p1).name() << endl;

  const char* s1 = "hello";
  string s2 = "hello";
  cout << typeid(s1).name() << endl;
  cout << typeid(s2).name() << endl;

  const char* p[] = {"hello", "word"};
  cout << *p << endl;
  cout << *(p + 1) << endl;
  cout << typeid(p).name() << endl;
}
