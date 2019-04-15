# coding:utf-8
x, y = 1, 2
# *交换值
x, y = y, x

print(x, y)

a = {'a': 1, 'b': 2}
c, d = a.popitem()
print(c, d)

a1 = (1, 2, 3, 4)
c1, d1, *rest = a1
print(rest)

# *条件表达式
print(1 if a1 else 2)


