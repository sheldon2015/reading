# coding=utf-8
a1 = "\u0030"
print(a1)
a2 = "\U0001F60A"
print(a2)
a3 = '\N{dog}'
print(a3)

a4 = '123a我'
a5 = bytes('123a我', "utf-8")
a6 = bytearray('123a我', "utf-8")

print(a5)
print(a6)
print(a4.encode('utf-32'))
