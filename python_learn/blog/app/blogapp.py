from flask import Flask
from flask_bootstrap import Bootstrap
from flask_login import LoginManager
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
import os
mail = Mail()
db = SQLAlchemy()
from .auth import auth as auth_blueprint
from .models.user import User, Post
bootstrap = Bootstrap()
# *登录权限模块
login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.login_message = "请登录！"


@login_manager.user_loader
def load_user(user_id):
    print('user_id', user_id)
    user = User()
    return user


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hard to guess string'
    app.config['MAIL_SERVER'] = 'smtp.qq.com'
    app.config['MAIL_PORT'] = 25
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = '823231684@qq.com'
    app.config['MAIL_PASSWORD'] = 'qdvmgrwtzzjabcdc'
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
        os.path.join(basedir, 'data.sqlite')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    bootstrap.init_app(app)
    mail.init_app(app)
    login_manager.init_app(app)
    app.register_blueprint(auth_blueprint, url_prefix='/')
    return app
