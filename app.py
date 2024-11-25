from flask import Flask, render_template 
app=Flask(__name__)

@app.route("/")
def index():
    return render_template('Task 11.html')

@app.route("/model.html")
def model():
    return render_template('model.html')

@app.route("/viewdata.html")
def viewdata():
    return render_template('viewdata.html')

@app.route("/viewbag.html")
def viewbag():
    return render_template('viewbag.html')

@app.route("/serviceinjection.html")
def serviceinjection():
    return render_template('serviceinjection.html')

if __name__=="__main__":
    app.run(debug=True)