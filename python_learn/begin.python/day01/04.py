# coding=utf-8
# *切片
s = [1, 2, 3]
print(s[1:3])
print(s[1:])
print(s[-1:0])
print([None]*10)

print(s[2:1:-1])
# * 给切片赋值
s[2:3] = [21]*10

list1 = list((1, 3))
print(s)
print(list1)
