from flask import Flask,render_template
from flask import request

app = Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')
@app.route("/homepage.html")
def homepage():
	return render_template('homepage.html')

if __name__ == "__main__":
	app.run(host="0,0,0,0",port=)