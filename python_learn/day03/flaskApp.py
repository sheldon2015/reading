
from flask import Flask
from flask import make_response
from flask import abort
from flask import redirect
from flask import request
from flask import session
from flask import url_for
from flask import render_template

#  flask 的上下文对象current_app  , g ,request,session
from flask import current_app
from flask import g
# 传入__name__,是为了便于确定应用中资源的位置
app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app_ctx = app.app_context()
app_ctx.push()
# print(dir(current_app), '\n')
# print(dir(g), '\n')


@app.route("/")
def hello():
    # 去默认的模版目录{templates}下面寻找模版文件

    return render_template('index.html', name=session.get('name') if session else '')


def test():
    # print(dir(session), '\n')
    # print(request.headers.keys(), '\n')
    print(request.form.get('name'), '\n')
    # 存储到session中
    session['name'] = request.form.get('name')
    return redirect(url_for('name', name='111111'))


app.add_url_rule('/test', 'test', test, methods=['POST'])


@app.route("/test/<name>")
def name(name):
    # 模版字符串
    return '''Hello World!
    {a}
    {b}
    '''.format(b=name, a=22222)


@app.route('/re')
def redir():
    # 重定向
    return redirect('http://www.baidu.com')


@app.route('/re/<name>')
def get_user(name):
    user = None
    # 获取动态路由和查询字符串
    print(url_for('get_user', name=name, s=1111111))
    if user:
        abort(404)
    print(111)
    return '<h1>Hello, {}</h1>'.format(11)


#  定制错误路由404
@app.errorhandler(404)
def err404(err):
    return 'not found', 404


#  定制错误路由500
@app.errorhandler(500)
def err500(err):
    return 'not found', 500


# print(app.url_map)
