
from flask import Flask, request, g, session, make_response, session
import MySQLdb as mysql
from os import getenv
import simplejson as json


#controllers
from controllers    import user        as user_controller
from controllers    import company     as company_controller


# flask configuration
app = Flask(__name__)
app.secret_key = str(getenv('FLASK_SECRET'))


#
#   DB configuration
#
@app.before_request
def before_request():
    if not getattr(g, 'db', None):
        g.db = connect_db()


@app.teardown_request
def teardown_request(exception):
    if hasattr(g, 'db'):
        close_db()


def connect_db():
    return mysql.connect(   host    = getenv('MYSQL_HOST'),
                            user    = getenv('MYSQL_USER'),
                            passwd  = getenv('MYSQL_PASSWORD'),
                            db      = getenv('MYSQL_DATABASE') )
def close_db():
    g.db.close()


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
    if request.method == 'GET':
        pass
    else:
        response = company_controller.create(g.db, request, session['user_id'])
        return json.dumps(response)

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
    session.clear()
    return json.dumps({'statusCode':200})



@app.route('/login', methods=['POST'])
def login():
    response = user_controller.login(g.db, request)
    if response['success']:
        session['user_id'] = response['user_id']
        print 'SESSION: ', session
        return json.dumps({'statusCode':200})
    else:
        return json.dumps({'statusCode': response['statusCode']})


@app.route('/')
def index():
    return make_response(open('public/base.html').read())


if __name__ == '__main__':
    app.run(debug=True)

