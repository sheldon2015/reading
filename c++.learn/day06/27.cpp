#include <iostream>
#include <memory>
using std::cout;
using std::make_unique;
using std::ostream;
using std::string;
using std::unique_ptr;

class Resouce
{

public:
  Resouce()
  {
    cout << "initial" << '\n';
  }
  Resouce(const Resouce &R)
  {
    cout << "copy initial" << '\n';
  }
  ~Resouce()
  {
    cout << "destory" << '\n';
  }
  string getInfo() const
  {
    return "asdasdasda";
  }
  friend ostream &operator<<(ostream &out, const Resouce &res)
  {
    cout << res.getInfo() << "\n";
    return out;
  }
};

unique_ptr<Resouce> createSource()
{
  return make_unique<Resouce>();
}
Resouce createSource2()
{
  return Resouce();
}

void show(const Resouce *const p)
{
  cout << p->getInfo() << '\n';
}

int main()
{
  //*unique_ptr is designed with move semantics in mind, copy initialization and copy assignment are disabled
  unique_ptr<Resouce> r1(new Resouce());
  if (r1)
  {
    cout << *r1 << '\n';
  }
  unique_ptr<Resouce> ptr = createSource();
  cout << "---------------" << '\n';
  Resouce ptr2 = createSource2();
  cout << "---------------" << '\n';
  show(ptr.get());
  return 0;
}