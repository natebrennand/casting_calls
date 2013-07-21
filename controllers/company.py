


def create(db_conn, request):
    errors = ""

    ajson = request.form
    cursor = db_conn.cursor()
    cursor.execute("""
        SELECT 1 FROM
            actor
        WHERE
            id = %s
    """, (ajson['id']))
    data = cursor.fetchall()
    record_exist = (len(data) > 0)

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



