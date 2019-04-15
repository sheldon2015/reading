
#include <iostream>
using namespace std;

class People {
 private:
  int a = 1;

 public:
  class Car {
    int a = 1;

   public:
    void run() {
      a = 2;
      cout << "run" << endl;
    }
  };
  void print() { cout << a << endl; }
  // *声明一个friend函数
  friend void reset(People&);
};

void reset(const People& p) {
  cout << "enter" << endl;
}

int main() {
  reset(People{});
  //   using Car = People::Car;
  typedef People::Car Car;
  Car c;
  c.run();
  return 0;
}
