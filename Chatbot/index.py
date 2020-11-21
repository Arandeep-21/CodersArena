from flask import Flask, render_template, jsonify
from flask import request
from flask_cors import CORS, cross_origin
import Try

app = Flask(__name__)
CORS(app)
tt = 1
@app.route("/")
def hello():
    return render_template('bot.html')

@app.route('/get_results')
def chat():
    print("Start talking with the Bot, type 'quit' to stop: ")
    userText = request.args.get("msg")
    bot = Try.ChatBot()
    text= bot.chat(userText)
    return text


if __name__ == '__main__':
    print("oh Hello")
    app.run(host = '127.0.0.1', port=1234,debug=True)