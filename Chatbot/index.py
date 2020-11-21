from flask import Flask, render_template, jsonify
from flask import request
from flask_cors import CORS, cross_origin
import Try
import QueryCF as CF

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

@app.route('/get_problems')
def rec():
    handle = request.args.get("handle")
    query = CF.QueryCodeForces()
    query.problemsetUpdater()
    query.allProblemStat()
    query.prepareProblemQueue()
    query.userStat(handle)
    result = query.problemRecommender()
    return result


if __name__ == '__main__':
    print("oh Hello")
    app.run(host = '127.0.0.1', port=1234,debug=True)