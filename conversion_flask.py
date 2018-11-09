from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def maine():
    return render_template("maine.html")

if __name__ == '_main__':
    app.run(debug=True)

