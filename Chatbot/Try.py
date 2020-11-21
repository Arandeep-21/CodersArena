import nltk
import numpy
import tflearn
from tensorflow.python.framework import ops
import pickle
import random
import json

from nltk.stem.lancaster import LancasterStemmer

class ChatBot:

    def __init__(self):
        print("Chat Bot Initiated")
    
    def bag_of_words(self,s, words):
        stemmer = LancasterStemmer()
        bag = [0 for _ in range(len(words))]
        s_words = nltk.word_tokenize(s)
        s_words = [stemmer.stem(word.lower()) for word in s_words]

        for se in s_words:
            for i, w in enumerate(words):
                if w == se:
                    bag[i] = 1

        return numpy.array(bag)
    
    def activate(self):
        with open("data.pickle", "rb") as f:
            words, labels, training, output = pickle.load(f)

        ops.reset_default_graph()
        net = tflearn.input_data(shape=[None, len(training[0])])
        net = tflearn.fully_connected(net, 8)
        net = tflearn.fully_connected(net, 8)
        net = tflearn.fully_connected(net, len(output[0]), activation="softmax")
        net = tflearn.regression(net)
        model = tflearn.DNN(net)
        return model

    # now we've created the model, time for the chat

    def chat(self,inp):
        with open("intents.json") as file:
            data = json.load(file)
        model=self.activate()
        model.load("./model.tflearn")
        with open("data.pickle", "rb") as f:
            words, labels, training, output = pickle.load(f)
        results = model.predict([self.bag_of_words(inp, words)])[0]
        results_index = numpy.argmax(results)
        tag = labels[results_index]
        responses=list()
        if results[results_index]> 0.7:
            for tg in data["intents"]:
                if tg['tag'] == tag:
                    responses = tg['responses']
            return random.choice(responses)
        else:
            return "I don't quite understand, try again or ask another question"


