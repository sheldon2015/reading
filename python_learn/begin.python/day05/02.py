# coding:utf-8
# *抽象类
from abc import ABC, abstractmethod


class People(ABC):
    @abstractmethod
    def speak(self):
        pass


class Man(People):
    def speak(self):
        print('i can speak english')


p = Man()
p.speak()
