
from flask import Flask, request, g, session, make_response

app = Flask(__name__)


@app.route('/')
def index():
    return make_response(open('public/base.html').read())


if __name__ == '__main__':
    app.run(debug=True)

