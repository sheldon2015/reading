
# 定义装饰器


def log(func):
    print('enter')

    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper

# 应用装饰器


'''
装饰器相当于高阶函数返回一个函数
now =log(now)
'''


@log
def now(*args, **kw):
    print(args)
    print(kw)
    print('2015-3-25')


# now(1, 2, a=1)
