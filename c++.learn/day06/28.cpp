#include <iostream>
#include <list>
#include <algorithm>
#include <cstring>
using std::cout;
using std::find;
using std::list;
using std::max_element;
using std::min_element;

int main()
{
  list<int> li{1, 2, 3, 4, 5, 9, 10, 44};
  list<int>::const_iterator it;
  cout << *(max_element(li.begin(), li.end())) << '\n';
  cout << *(min_element(li.begin(), li.end())) << '\n';
  it = find(li.begin(), li.end(), 1);
  li.insert(it, 121);
  it = li.begin();
  while (it != li.end())
  {
    cout << *it << '\n';
    it++;
  }

  const char *const c = "asdsds";

  cout << c << '\n';
  return 0;
}