from project import db
from datetime import datetime



class Details(db.Model):
    __tablename__ = 'details'
    id = db.Column(db.Integer(), primary_key=True)
    fullname = db.Column(db.String(100))
    email = db.Column(db.String(50))

