from flask import Flask, render_template, request, redirect
import numpy as np

app = Flask(__name__)

@app.route('/')
def maine():
    return render_template("maine.html")

if __naem__ == "_main__":
    app.run(debug=True)

