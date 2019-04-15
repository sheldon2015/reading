# -*- coding: utf8 -*-

#  注意__a,_a(等命名的变量)
# __a可以在class中定义私有变量

class Person():
    # 定义构造函数
    def __init__(self, name, age):
        self.name = name
        self.age = age


p1 = Person('ywz', 20)
print(p1.name, p1.age)
print(p1)


class Animal:
    pass


a = Animal()

print(a)

a.name = 'tiger'
print(a)
print(a.name)
