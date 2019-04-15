# coding:utf-8
def test():
    print('enter  function')


# 是否可以调用
print(callable(test))


# *剩余参数和具名参数
def func(a, b, c, *arg, **arg2):
    print(a, b, c)
    print(*arg)
    print(arg2)


s = {'n': 1000}
func(1, 2, 3, 4, 5, 6, 7, **s)

print(vars())
