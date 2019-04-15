
from flask import Flask
from flask_mail import Mail
from flask_mail import Message
app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.qq.com'
app.config['MAIL_PORT'] = 25
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = '823231684@qq.com'
app.config['MAIL_PASSWORD'] = 'qdvmgrwtzzjabcdc'
mail = Mail(app)
msg = Message('test email', sender='823231684@qq.com',
              recipients=['yaowenzhu@anchol.com'])
msg.body = 'This is the plain text body'
msg.html = 'This is the <b>HTML</b> body'
with app.app_context():
    mail.send(msg)
