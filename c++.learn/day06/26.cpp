#include <iostream>
#include <vector>
using std::cout;
using std::move;
using std::string;
using std::vector;

template <typename T>
void swap(T &t1, T &t2)
{
  T temp = move(t1);
  t1 = move(t2);
  t2 = move(temp);
}

int main()
{
  string x{"abc"};
  string y{"de"};
  cout << "x: " << x << '\n';
  cout << "y: " << y << '\n';
  swap(x, y);
  cout << "x: " << x << '\n';
  cout << "y: " << y << '\n';
  vector<string> s;
  // *调用左值班本
  s.push_back(x);
  cout << "x: " << x << '\n';
  // *调用右值版本,x本身的值回到uninitiatized or zero state
  s.push_back(move(x));
  cout << "x: " << x << '\n';
  x = {"1111111111"};
  cout << "x: " << x << '\n';

  string a{"aaa"};
  string b{"bbb"};
  a = move(b);
  cout << "a: " << a << '\n';
  cout << "b: " << b << '\n';
  return 0;
}