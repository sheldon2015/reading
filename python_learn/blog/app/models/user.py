from flask_login import UserMixin
from ..blogapp import db
'''
数据库使用关系建立记录之间的关系，一对多，多对多
多对多关系:
添加关联表将对多对多的关系转化为两个多对一的关系

'''


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    posts = db.relationship('Post', backref='author', lazy='dynamic')
    # *判断用户是否已经登录

    def is_authenticated(self):
        return True

    # *是否允许用户登录
    def is_actice(self):
        return True

    # *普通用户返回false
    def is_anonymous(self):
        return False

    # *范湖用的唯一标识
    def get_id(self):
        return "1"


class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text)
    body_html = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, index=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
