from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, Regexp, EqualTo
from wtforms import ValidationError


# *定义注册表单
class RegistrationForm(FlaskForm):
    email = StringField(
        '邮箱', validators=[DataRequired(), Email(), Length(1, 64)])
    username = StringField('用户名', validators=[
        DataRequired(), Length(1, 64),
        Regexp('^[A-Za-z][A-Za-z0-9_.]*$', 0,
               '用户名中至少包含字母,数字,下划线')])
    password = PasswordField('输入密码', validators=[
        DataRequired()])
    password2 = PasswordField(
        '确认密码', validators=[DataRequired(), EqualTo('password', message='密码不匹配')])
    submit = SubmitField('注 册')
    # *定义验证方法

    def validate_email(self, field):
        print('email')
        # if User.query.filter_by(email=field.data).first():
        #     raise ValidationError('Email already registered.')

    def validate_username(self, field):
        print('username')
        # if User.query.filter_by(username=field.data).first():
        #     raise ValidationError('Username already in use.')

# *定义登录表单


class LoginForm(FlaskForm):
    email = StringField(
        '邮箱', validators=[DataRequired(), Email(), Length(1, 64)])
    password = PasswordField('输入密码', validators=[
        DataRequired()])
    submit = SubmitField('登 录')


class PostForm(FlaskForm):
    body = TextAreaField("输入blog信息", validators=[DataRequired()])
    submit = SubmitField('提交')
