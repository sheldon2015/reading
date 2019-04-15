# #coding:utf-8
# *关联父类构造函数和关联非父类构造函数


class Bird():
    def __init__(self):
        self.name = 'bird'


class BigBird(Bird):

    def __init__(self):
        #* 关联父类构造函数
        # super(BigBird, self).__init__()
        super().__init__()
        self.age = '1111'


b = BigBird()
print(b.name)


class RedBird(Bird):
    def __init__(self):
        # *未关联父类构造函数
        Bird.__init__(self)
        self.age = '1111'


c = RedBird()
print(c.name)
