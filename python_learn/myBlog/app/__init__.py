from flask import Flask
from flask_bootstrap import Bootstrap
from flask_login import LoginManager
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_moment import Moment
from flask_pagedown import PageDown
import os
mail = Mail()
db = SQLAlchemy()
moment = Moment()
pagedown = PageDown()

bootstrap = Bootstrap()
# *登录权限模块
login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.login_message = "请登录！"
from .models import User
from .main import main as main_blueprint
from .auth import auth as auth_blueprint


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hard to guess string'
    app.config['MAIL_SERVER'] = 'smtp.qq.com'
    app.config['MAIL_PORT'] = 25
    app.config['MAIL_USE_TLS'] = True
    # *{mail name}和{sender}最好一致，或者相匹配
    app.config['MAIL_USERNAME'] = '823231684@qq.com'
    app.config['MAIL_PASSWORD'] = 'qdvmgrwtzzjabcdc'
    app.config['FLASKY_MAIL_SUBJECT_PREFIX'] = 'popstack'
    app.config['FLASKY_MAIL_SENDER'] = '823231684@qq.com'
    app.config['FLASKY_POSTS_PER_PAGE'] = 10
    app.config['BOOTSTRAP_SERVE_LOCAL'] = True
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
        os.path.join(basedir, 'data.sqlite')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    bootstrap.init_app(app)
    mail.init_app(app)
    pagedown.init_app(app)
    db.init_app(app)
    moment.init_app(app)
    login_manager.init_app(app)
    app.register_blueprint(main_blueprint, url_prefix='/')
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    return app
