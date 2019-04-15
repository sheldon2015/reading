from .app.blogapp import create_app
app = create_app()
from .app.blogapp import db
from .app.models.user import User, Post


@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User, Post=Post)
