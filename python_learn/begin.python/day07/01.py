# coding:utf-8
import sqlite3
conn = sqlite3.connect('test.db')
cursor = conn.cursor()
# cursor.execute('''
# CREATE TABLE people (
#     id INTEGER  PRIMARY KEY AUTOINCREMENT,
#     sex BOOL,
#     age INT,
#     salry FLOAT,
#     address TEXT
# )
# ''')
# sql = '''
#  INSERT INTO  people (SEX,AGE)  VALUES(?,? )
# '''

sql = '''
INSERT INTO people(sex,age,salry,address) VALUES(?,?,?,?)
'''
cursor.execute(sql, [False, 30, 12000.00, '福星华府'])


conn.commit()
