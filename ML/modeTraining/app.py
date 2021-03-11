# app.py
from flask import Flask, request, jsonify
app = Flask(__name__)
import pickle as pkl
import numpy as np
import pandas as pd

@app.route('/covid/', methods=['POST'])
def respond():
    # Retrieve the arguements from url parameter
    return "<h1> AA gaye meri maut ka tamasha dekhne"
    rd = request.args
    # Loading the model
    bernoulliPredictor = pkl.load(open('covidmodel', 'rb'))

    rawList = []
    for item in rd:
        rawList.append(rd[item])


    inputVector = np.array(finans)
    inputVector = inputVector.reshape(1,-1)
    print(inputVector)
    answerComputed = bernoulliPredictor(inputVector)
    print(answerComputed)
    
    # Return the response in json format
    return jsonify(answerComputed)

# A welcome message to test our server
@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
