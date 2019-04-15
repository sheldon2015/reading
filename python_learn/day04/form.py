# 处理表单项
from flask import Flask
from flask import render_template
from flask import session
from flask import Blueprint
app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

# 定义一个蓝图
testBlueprint=Blueprint('testBlueprint',__name__)



# 服务端处理表单
from flask_wtf import FlaskForm
from wtforms import (StringField,SubmitField)
from wtforms.validators import DataRequired

class Form(FlaskForm):
    name = StringField('姓名', validators=[DataRequired()])
    submit = SubmitField('提交')



@testBlueprint.route("/",methods=['GET', 'POST'])
def hello():
    name = None
    form = Form()
    if form.validate_on_submit():
        print(form.name)
        name = form.name.data
    return render_template('index.html',form=Form(),name=name if name else 'default name ywz')

app.register_blueprint(testBlueprint,url_prefix='/pages')