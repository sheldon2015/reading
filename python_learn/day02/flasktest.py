'''
启动development server
1. app.run()

2. 命令行中运行

'''
from flask import Flask
print(__name__)
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


