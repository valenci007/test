from flask import Flask, request,render_template,abort,redirect,url_for,flash,make_response,session,redirect
from project.myforms import StaffDetails
from project import app
from project import db
from project.models import Details
# from werkzeug import secure_filename
import os
import json




@app.route('/')
def homepage():
    form = StaffDetails()
    return render_template('homepage.html',form=form)


@app.route('/lists',methods=['GET'])
def lists():
    if request.method=='GET':
        qrylist=Details.query.all()
        return render_template('report.html',qrylist=qrylist)


@app.route('/add',methods=['POST'])
def add():
    form = StaffDetails()
    if request.method =='POST':

        name=request.form['Name']
        email=request.form['Email']
        if form.validate_on_submit():
            d=Details(fullname=name,email=email)
            db.session.add(d)
            db.session.commit()
            flash('Infomation Update Successfully Added')
            return redirect('/')
        else:
            return render_template('homepage.html',form=form)
    else:
        return 'error'
    

