# coding:utf-8
x = 10


def test():
    x = 2
    return x**3


print(test())


def test1():
    global x
    x += 10
    return x**3


print(test1())
print(x)
# *存储其所在作用域的函数称为 闭包
