# coding:utf-8
for i in range(10, 20):
    print(i)


for i, j in zip(range(10), range(30)):
    print(i, j)

# *获取迭代的顺序
for index, value in enumerate(range(20, 30)):
    print(index)
    print(value)


