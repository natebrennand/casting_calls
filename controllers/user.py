
from hashlib import md5


# Returns either False with an error message
# or True with a user_id
def login(db_conn, request):
    form = request.form
    if not form or not form['username'] or not form['password']:
        return {
            "success"   : False,
            "statusCode": 400,
            "message"   : "No credentials found"
        }
    username, password = form['username'], form['password']
    cursor = db_conn.cursor()
    cursor.execute("""
        SELECT
            id,
            password
        FROM
            user
        WHERE
            username = %s
    """, (username))
    data = cursor.fetchall()
    if len(data) == 0:
        return {
            "success"   : False,
            "statusCode": 404,
            "message"   :"Username not found"
        }
    user_id, db_password = data[0]
    if db_password == md5(password).hexdigest():
        return {
            "success"   : True,
            "statusCode": 202,
            "user_id"   : user_id
        }
    else:
        return {
            "success"   : False,
            "statusCode": 401,
            "message"   : "Incorrect password"
        }




