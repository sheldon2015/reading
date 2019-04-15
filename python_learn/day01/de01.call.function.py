# -*- coding: utf8 -*-
def result():
    print('111')
    return [1, 2]

# result在此处会调用与js的调用不同


def test(s=result()):
    s.append('end')
    print(s)


print(__name__)
test()
test()
test()
