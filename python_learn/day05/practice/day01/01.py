#coding=utf-8
#区分字典分属性

s = {'a': 1}
print(s.get('a'))
# print(s.a)
print(s['a'])
print(s.get('b', 'test dict'))
# print(s.b)
print(s['b'])
