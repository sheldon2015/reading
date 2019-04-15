# coding:utf-8
# *python中导入模块，只会导入一次(可以避免循环依赖)

import sys
print(sys.path)
print(__name__)

'''
 说明test函数的用法
'''


def test():
    print('test')


__all__ = ['test']


print(__file__)
