def wapper(x=1):
    def inner(y):
        nonlocal x
        x += 1
        print(y)
    return inner


wapper()(2)
