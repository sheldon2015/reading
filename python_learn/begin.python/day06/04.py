# coding:utf-8
# *创建集合


s = set(range(1, 20))

s2 = {x for x in range(20)}
print(s)
print(s2)


s3 = dict(key='value')

print(s3)


s4 = {'a': 2, 'b': 3}

print(dict(**s4))
