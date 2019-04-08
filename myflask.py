from project import app


print(app.config['USERNAME'])
if __name__=='__main__':
    app.run(debug=True)
