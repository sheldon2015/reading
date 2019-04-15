from flask import (current_app, flash, redirect, render_template, request,
                   url_for)
from flask_login import login_required, login_user, logout_user, current_user
from flask_mail import Message

from . import auth
from ..blogapp import mail, db
from ..models.user import User, Post
from .form import LoginForm, RegistrationForm, PostForm


@auth.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    # *服务器端表单验证通过
    if form.validate_on_submit():
        return redirect(url_for('auth.login'))
        # *渲染模版出入，表单对象和模板对象
    return render_template('auth/register.html', form=form)


@auth.route('/login', methods=['GET', "POST"])
def login():
    form = LoginForm()
    # *后端数据类型验证通过
    if form.validate_on_submit():
        # *进行数据校验
        # *登录成功
        if True:
            login_user(User())
            # *给用户的邮箱发送邮件，需要用户确认是否有效
            flash('认证邮件已经发送到你的邮箱了,请查阅')
            msg = Message('test email', sender='823231684@qq.com',
                          recipients=['yaowenzhu@anchol.com'])
            msg.body = 'This is the plain text body'
            msg.html = 'This is the <b>HTML</b> body'
            app = current_app._get_current_object()
            with app.app_context():
                mail.send(msg)
            print('----------------------------------', request.args.get('next'))
            return redirect(request.args.get('next') or url_for('auth.index'))
        else:
            # *登录失败
            flash('无效的用户名或者密码')
    return render_template('auth/login.html', form=form)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    flash('您已经退出登录')
    return redirect(url_for('auth.login'))


@auth.route('/', methods=['GET', 'POST'])
def index():
    form = PostForm()
    if form.validate_on_submit():
        post = Post(body=form.body.data,
                    author=current_user._get_current_object())
        print(post, '++++++++++++++++++++++++++++++++++++++++++++')
        db.session.add(post)
        return redirect(url_for('auth.index'))
    return render_template('index.html', form=form)
