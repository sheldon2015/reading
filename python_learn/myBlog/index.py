from app import create_app
from app.models import User, db
app = create_app()
@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User)
