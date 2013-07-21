


def create(db_conn, request, user_id):
    form = request.form
    cursor = db_conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO company
                (id, name, type)
            VALUES
                (%s, %s, %s)
        """, (user_id, form['name'], form['type']))
        db_conn.commit()
    except Error:
        print 'Database error'
        cursor.close()
        return {'status': 500}
    cursor.close()
    return {'status': 200}



