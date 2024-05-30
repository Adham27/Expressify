from datetime import datetime
from models.db import db

class Reports(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reportname = db.Column(db.String(50), unique=True, nullable=False)
    created_by = db.Column(db.String(36), db.ForeignKey('user.id'))  # ForeignKey to user.id
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)


    # Define relationship with User model
    user = db.relationship('User', backref='reports', foreign_keys=[created_by])

    def serialize(self):
        return {
            "id": self.id,
            "reportname": self.reportname,
            "created_by": self.created_by,
            "created_at": self.created_at
        }