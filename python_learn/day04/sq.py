# 处理表单项
from flask import Flask
import  sqlite3
app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'


conn = sqlite3.connect('test.db')

cursor = conn.cursor()
cursor.execute('select * from user')

res=cursor.fetchone()
print(res)





