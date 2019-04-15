# coding:utf-8
# *字符串格式设置运算符
a = 'aaaaa%sbbbbbbbb'

print(a % ('ccccc'))
a = 'aaaaaaa{}bbbbbbbbbbb'
print(a.format('cccccc'))


c = {'b': 1}

# d=[]
# d[2]=3
# print(d)
print('i am {name}'.format_map({'name': 20}))

