#import MySQLdb as mysql

# Note on Preferred Location:
# flags go in order = Manhatten, Brooklyn, Queens, Bronx, Staten Island

GENDERS = ('Male', 'Female')
RACES = ('White', 'Black or African American', 'American Indian or Alaskan', 'Asian', 'Hawaiian or Pacific Island', 'Other')
HEIGHT_RANGE = [20, 96]
WEIGHT_RANGE = [50, 500]
BODYTYPE = ('Thin','Athletic','Obese')
TF = ('T', 'F')
COMPENSATION = ('None', 'Room and Board', 'Stipend', 'Salary')
SINGINGTYPES = ('Opera', 'TBD')

# Saves Actor Skills and Chracteristics Data
def save_actor(db_conn, request):
    ajson = request.form
    cursor = db_conn.cursor()
    cursor.execute("""
        SELECT 1 FROM
            actor
        WHERE
            id = %s
    """, (ajson['id']))
    data = cursor.fetchall()
    record_exist = (len(data) > 0)  #does the record already exist in the system

    # check each field valid
    errors = ""
    if ("id" not in ajson):
        errors += "User ID required; "
    if ("gender" not in ajson) and (not record_exist):
        errors += "Gender is Required; "
    elif (ajson['gender'] not in GENDERS):
        errors += "Gender Invalid (must be 'Male' or 'Female'); "
    if ("CompensationDesired" not in ajson) and (not record_exist):
        errors += "Compensation Desired is Required; "
    elif (ajson['CompensationDesired'] not in COMPENSATION):
        errors += "Compensation Desired Invalid (Must be None, Room and Board, Stipend)"
    if ("race" in ajson) and (ajson['race'] not in RACES):
        errors += "Race Invalid (must be White, Black or African American, American Indian or Alaskan, Asian, Hawaiian or Pacific Island, or Other; "
    if ("height" in ajson):
        if not str(ajson['height']).replace('.','',1).isdigit():
            errors += "Height Invalid (must be float, in inches); "
        elif (float(ajson['height']) < HEIGHT_RANGE[0]) or (float(ajson['height']) > HEIGHT_RANGE[1]):
            errors += "Height Invalid (must between 20 and 96 inches); "
    if ("weight" in ajson):
        if not str(ajson['weight']).replace('.','',1).isdigit():
            errors += "Weight Invalid (must be float, in lb); "
        elif (float(ajson['weight']) < WEIGHT_RANGE[0]) or (float(ajson['weight']) > WEIGHT_RANGE[1]):
            errors += "Height Invalid (must between 50 and 500 lbs); "
    if ("bodytype" in ajson):
        errors += "Okay listen, I accidentally made actor.bodytype a float, so don't try to do anything with it until that is fixed; "
    if ("preferredLocation" in ajson) and ((len(str(ajson['preferredLocation'])) != 5) or (len(str(ajson['preferredLocation']).replace('1', '').replace('0', '')) > 0)):
        errors += "Preferred Location Invalid (must be 5 characters, all 1 and 0; "
    if ("TheatreFlag" in ajson) and (ajson['TheatreFlag'] not in TF):
        errors += "TheatreFlag invalid, must be T or F; "
    if ("FilmFlag" in ajson) and (ajson['FilmFlag'] not in TF):
        errors += "FilmFlag invalid, must be T or F; "
    if ("MusicalTheatreFlag" in ajson) and (ajson['MusicalTheatreFlag'] not in TF):
        errors += "MusicalTheatreFlag invalid, must be T or F; "
    if ("GymnasticFlag" in ajson) and (ajson['GymnasticFlag'] not in TF):
        errors += "GymnasticFlag invalid, must be T or F; "
    if ("SingingTypes" in ajson) and (ajson['SingingTypes'] not in SINGINGTYPES):
        errors += "Singing Type Invalid; "
    if ("SingingYears" in ajson) and (not str(ajson['SingingYears']).isdigit()):
        errors += "Singing Years must be integer; "

    # if update, update
    if record_exist:
        sql = "update actor set "
        for key, value in ajson.items():
            sql += key + " = '" + str(value) + "', "
        sql = sql.rstrip().rstrip(",")
        sql += " where id = " + str(ajson['id'])
        
        try:
            cursor.execute(sql)
            db_conn.commit()
        except Error:
            print 'Database error'
            cursor.close()
            return {'status': 500}

    # if new record,  insert
    else:
        sql = "insert into actor "
        sql1 = "("
        sql2 = "("
        for key, value in ajson.items():
            sql1 += key + ", "
            sql2 += "'" + str(value) + "', "
        sql1 = sql1.rstrip().rstrip(",")
        sql2 = sql2.rstrip().rstrip(",")
        sql1 += ")"
        sql2 += ")"
        sql += sql1 + " values " + sql2
        print sql

        try:
            cursor.execute(sql)
            db_conn.commit()
        except Error:
            print 'Database error'
            cursor.close()
            return {'status': 500}


    if len(errors) > 0:
       return {
                "success"   : False,
                "statusCode": 400,
                "message"   : errors,
                "record_exist" : record_exist
            }
    else:
        return {
                "success"   : True,
                "statusCode": 200,
                "record_exist" : record_exist
            }

def get_actor(dbconn, request):
    errors = "Function not yet Implemented"
    record_exist = False  #does the record already exist in the system

    if record_exist:

        errors = ""

    else:
        errors = "Record does not exist"




    if len(errors) > 0:
       return {
                "success"   : False,
                "statusCode": 400,
                "message"   : errors
            }
    else:
        return {
                "success"   : True,
                "statusCode": 200,
            }


#
#def favorite(dbconn, request):

# cursor.execute("""
#         SELECT
#             id,
#             password
#         FROM
#             user
#         WHERE
#             username = %s
#     """, (username))
#     data = cursor.fetchall()
#     if len(data) == 0:

