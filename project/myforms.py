from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,BooleanField,SubmitField,TextAreaField,DateField,SelectField,RadioField,FloatField,IntegerField
from wtforms.validators import DataRequired,Email,Length,EqualTo

class StaffDetails(FlaskForm):
    Name = StringField('Name:',validators=[DataRequired()])
    Email = StringField('Email:',validators=[DataRequired(),Email()])
    Submit=SubmitField('Submit')