class People:
    def get_info(self):
        return self.name, self.age

    def set_info(self, info):
        self.name, self.age = info

    def __init__(self, *args, **kwargs):
        self.name = kwargs['name']
        self.age = kwargs['age']
    test = property(get_info, set_info)


p = People(name='ywz', age=11)
print(p.name)
print(p.age)
print(p.get_info())
p.set_info(('zs', 20))
print(p.get_info())
print(p.test)
p.test = ('zewees', 2443434)
print(p.test)
