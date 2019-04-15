#include <iostream>
#include <fstream>
using std::cerr;
using std::cout;
using std::endl;
using std::ifstream;
using std::ofstream;
using std::string;

int main()
{
  //* 输出流
  ofstream outf("Sample.dat");
  if (!outf)
  {

    cerr << "Uh oh, Sample.dat could not be opened for writing!" << endl;
    exit(1);
  }

  outf << "This is line 1" << endl;
  outf << "This is line 2" << endl;
  //* 输入流
  ifstream inputf;
  inputf.open("Sample.dat");

  while (inputf)
  {
    string strInput;
    inputf >> strInput;
    cout << strInput << endl;
  }

  return 0;
}