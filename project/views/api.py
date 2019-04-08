import requests
from flask import jsonify
from project import app,csrf
from project import db
import json
from flask import jsonify
import datetime

@app.route('/jenkins/api/v1.0/jobslist',methods=['GET','POST'])
def listhostel():
    headers = {
    'Authorization': 'xyz',
    'Content-Type': 'application/json',
    }
    joblist=requests.args.get('data')
    # response=requests.get('urlforjoblist'headers=headers, data=data)
    qryjobs=jsonify(response)
    if qryjobs is  not None:
        c=mydbmodel(Job_Name=rsp['Job_Name'],Job_Status=rsp['Job_Status'],Update_time=datetime.datetime.now())       

