int g_x = 1;
extern const int g_y = 2;
int g_z;
//*这里的external表明这是一个external linkage属性
extern const int g_m = 1;
//*这里的external表明这是一个前置声明
extern const int g_l;
int g_test() {
  return 1;
}