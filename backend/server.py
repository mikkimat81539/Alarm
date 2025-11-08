from flask import Flask

app = Flask(__name__)

@app.route("/frontend/features.html")
def index():
    return 'features'