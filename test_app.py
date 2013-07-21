
from flask import Flask, request, g, session, make_response

app = Flask(__name__)


#
#   Audition Object API
#
@app.route('/audition/create', methods=['GET', 'POST'])
def audition_create():
    pass


@app.route('/audition/edit', methods=['GET', 'PUT'])
def audition_edit():
    pass


@app.route('/audition/delete', methods=['GET', 'DELETE'])
def audition_delete():
    pass


#
#   Part Object API
#
@app.route('/part/create', methods=['GET', 'POST'])
def part_create():
    pass


@app.route('/part/edit', methods=['GET', 'PUT'])
def part_edit():
    pass


@app.route('/part/delete', methods=['GET', 'DELETE'])
def part_delete():
    pass


#
#   Production Object API
#
@app.route('/production/create', methods=['GET', 'POST'])
def production_create():
    pass


@app.route('/production/edit', methods=['GET', 'PUT'])
def production_edit():
    pass


@app.route('/production/delete', methods=['GET', 'DELETE'])
def production_delete():
    pass


#
#   Company API
#
@app.route('/company/create', methods=['GET', 'POST'])
def company_create():
    pass


@app.route('/company/view')
def company_view():
    pass


@app.route('/company/edit', methods=['GET', 'POST'])
def company_edit():
    pass

#
#   Account API
#
@app.route('/account/view')
def account_view():
    pass


@app.route('/account/edit', methods=['GET', 'POST'])
def account_edit():
    pass


#
#   General operations
#
@app.route('/notfound')
def not_found():
    pass


@app.route('/unauthorized')
def unauthorized():
    pass


@app.route('/about')
def about():
    pass


@app.route('/logout', methods=['POST'])
def logout():
    pass


@app.route('/login', methods=['POST'])
def login():
    pass


@app.route('/')
def index():
    return make_response(open('public/base.html').read())


if __name__ == '__main__':
    app.run(debug=True)

